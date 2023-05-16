在开发过程中很多场景UI基本布局相同,但内部业务逻辑不同,这时可以用数据模型层

## 数据模型层

> 定义如下文件结构，每个.vue文件都有不同的模型
```js
const formModel=[
    {
        prop:'name',
        type:'input',
        label:'姓名'
    }
]
```

> 在每个.vue文件里有自己的query数据,如下

```js
const data={
    query:{
    	name:'xxx'
	}
}
```

> 两者结合如下, 伪代码:

```js
for i in formModel
	query[i.prop] => 'xxx'
```

### 二次封装表单组件

封装 template

```html
<el-form 
         :label-width="labelWidth" 
		 :rules="rules"  
         :label-position="labelPosition" 
         :inline="true" 
         :model="query" 
         class="demo-form-inline">
    <el-form-item 
                  :key="item.prop"
                  v-for="item in formModel"
                  :label="item.label"
                  :class="item.class ? item.class : null"
                  :style="{ width: item.width }"
                  v-show="!item.hidden"
                  :required="item.required"
                  :error="item.error"
                  >
        <el-input v-if="['input', 'password', 'textarea', 'number'].includes(item.type)" v-model="query[item.prop]" :placeholder="item.placeholder"></el-input>
        
         <div v-else-if="item.type === 'select'" :title="item.tooltip">
             <el-select
                        v-model="query[item.prop]"
                        :multiple="item.multiple"
                        :placeholder="item.placeholder || '请选择'"
                        :filterable="item.filterable"
                        :disabled="item.disabled"
                        :clearable="item.clearable || false"
                        :collapse-tags="item.collapseTags || false"
                        :collapse-tags-tooltip="item.collapseTagsTooltip || false"
                        @change="v => item.onChange && item.onChange(v, this)"
                        >
                 <el-option
                            v-for="(_item, _index) in item.options"
                            :key="_index"
                            :value="_item[item.valueKey || 'value']"
                            :label="_item[item.labelKey || 'label']"
                            :disabled="_item.disabled || false"
                            />
             </el-select>
        </div> 
    </el-form-item>
</el-form>
```

```js
 const customform = {
     template,         
     props: {
         formModel: {
             type: Array,
             default: () => []
         },
         query: {
             type: Object,
             default: () => { }
         },
         labelWidth: {
             type: Number | String,
             default: ''
         },
         labelPosition: {
             type: String,
             default: 'left',
         },
     },
     computed: {
         rules() {
             let _rules = {};
             this.formModel.forEach(item => {
                 if (item.rules) {
                     _rules[item.prop] = item.rules;
                 }
             });
             return _rules;
         }
     },
 }
```

```js
// 注册
components: {
	'custom-form': customform,
},
// 数据
 data: function () {
     return {
         form: {
             model: [
                 {
                     prop: 'name',
                     type: 'input',
                     label: '姓名',
                     placeholder: '请输入姓名',
                     width: '600px'
                 },
                 {
                     prop: 'quar',
                     type: 'select',
                     label: '季度',
                     placeholder: '请输入季度',
                     options: [
                         {
                             key: '0',
                             label: '一季度',
                             value: 1,
                         },
                         {
                             key: '1',
                             label: '二季度',
                             value: 2,
                         }
                     ],
                     valueKey:'value',
                     labelKey:'label',
                 },
                 {
                     prop: 'age',
                     type: 'input',
                     label: '年龄',
                     placeholder: '请输入年龄',
                 },
             ],
             query: {
                 name: 'xxx',
                 age: '18'
             }
         }
     }
},
```

使用

```html
<custom-form :form-model="form.model" :query="form.query"></custom-form>
```

![image-20230509112943924](/image-20230509112943924.png)

![image-20230509113634632](/image-20230509113634632.png)

> 这时在另外一个地方用到这个统一组件时,只需要传对应自己的模型和query数据即可,有可能其它地方不需要年龄,这时模型和query就不要定义age项了