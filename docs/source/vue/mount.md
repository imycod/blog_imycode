## 重写挂载方法

```js

// 获取宿主元素的方法
const idToTemplate = cached(id => {
  const el = query(id)
  return el && el.innerHTML
})

// 扩展 $mount 方法
const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el)

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    __DEV__ &&
      warn(
        `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
      )
    return this
  }
  
  // 获取选项 $options 
  const options = this.$options
  // resolve template/el and convert to render function

  // 如果 render 选项不存在
  if (!options.render) {
     // 则查找 template
    let template = options.template
    // 如果 template 存在，
    if (template) {
         // 如果 template 存在，且是字符串
      if (typeof template === 'string') { // 如果是字符串模板 例如："<div> template </div>"
        if (template.charAt(0) === '#') { // 如果是宿主元素的选择器，例如："#app"
          // 则调用上面的 idToTemplate() 方法查找
          template = idToTemplate(template)
          /* istanbul ignore if */
          if (__DEV__ && !template) {
            warn(
              `Template element not found or is empty: ${options.template}`,
              this
            )
          }
        }
         // 如果是一个dom元素
      } else if (template.nodeType) {
          // 则使用它的 innerHTML
        template = template.innerHTML
      } else {
        if (__DEV__) {
          warn('invalid template option:' + template, this)
        }
        return this
      }
      // 如果设置了 el 
    } else if (el) {
      // @ts-expect-error
      // 则以 el 的 outerHTML 作为 template
      template = getOuterHTML(el)
    }
      // 如果存在 template 选项，则编译它获取 render 函数
    if (template) {
      /* istanbul ignore if */
      if (__DEV__ && config.performance && mark) {
        mark('compile')
      }
      // 编译的过程：把 template 变为 render 函数
      const { render, staticRenderFns } = compileToFunctions(
        template,
        {
          outputSourceRange: __DEV__,
          shouldDecodeNewlines,
          shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        },
        this
      )
      // 编译的过程：把 template 变为 render 函数
      options.render = render
      options.staticRenderFns = staticRenderFns

      /* istanbul ignore if */
      if (__DEV__ && config.performance && mark) {
        mark('compile end')
        measure(`vue ${this._name} compile`, 'compile', 'compile end')
      }
    }
  }
    // 执行默认的挂载
  return mount.call(this, el, hydrating)
}

```

### 总结

```js
  new Vue({
     el: "#app", // 3
     template: "<div> template </div>",  // 2
     template: "#app",  // 2
     render(h){ return h("div", "render")},  // 1
     data: {}
  })
```

> 在用户同时设置了 el、template、render的时候，优先级的判断为：render > template > el