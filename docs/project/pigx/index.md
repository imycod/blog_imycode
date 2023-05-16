## 2个el-tree和1个下拉框状态映射

> 一个需求是tree的每个节点都对应另一个新tree,那么我们要用对象作为存储的数据接口,以叶子节点作为key以另一棵树的选中状态作为value,数据结构如下
```js
// fake mock
const checkedMap={
    '000024':['2','3','4']
}
```
> 但是另外一个需求是,我们还需要记录每个节点当前下拉框的状态,这时数据结构需要做些改变

```js
// fake mock
const checkedMap={
    '000024':{
        type:'0',
        checked:['2','3','4'],
    }
}
```

![image-20230509000855985](/image-20230509000855985.png)

![image-20230509000950644](/image-20230509000950644.png)

![image-20230509001006549](/image-20230509001006549.png)

如图，每个节点都对应２种不同的状态且这两种状态来自不同的外部组件．

大致代码如下：

```vue
<el-tree ref="menuTree" :data="treeDataComputed" :default-checked-keys="currentCheckedKeys"
         :check-strictly="false" :props="defaultProps" @node-click="handleMenuNodeClick"
         :filter-node-method="filterNode" class="filter-tree" node-key="id" highlight-current show-checkbox
         default-expand-all />

<el-select v-model="dsType" @change="onChange" class="m-2" placeholder="Select" size="large">
    <el-option v-for="item in dsOptions.dicData" :key="item.value" :label="item.label"
               :value="item.value" />
</el-select>

<div v-if="dsType == 1" v-loading="isMenuRoleLoading">
    <el-tree ref="scopeTree" :data="dsScopeData" :check-strictly="true"
             :default-checked-keys="checked" @check="check" :props="defaultProps" class="filter-tree"
             node-key="id" highlight-current show-checkbox />
</div>

```

```js
<script>
    export default {
        data(){
          return {
              props: {
                        label: 'label',
                        children: 'children',
                        value:'id',
                    },
            dsType: 0,
            currentItem: {},
            checkedDsScope:{},
          }  
        },
         computed: {
            checked(){
                return this.checkedDsScope[this.currentItem.id+'']?.checked
            },
            treeDataComputed() {
                const copyTreeData = deepClone(this.treeData)

                this.setTreeDisabled(copyTreeData)

                return filterTreeByCheckKeys(copyTreeData, this.currentCheckedKeys)
            },
    	},
        methods: {
            onChange(v){
                this.checkedDsScope[this.currentItem.id+'']['checked']=this.checkedDsScope[this.currentItem.id+''].checked
                this.checkedDsScope[this.currentItem.id+'']['type']=v
            },
            check(_,b){
                this.checkedDsScope[this.currentItem.id+'']['checked']=b.checkedKeys
                this.checkedDsScope[this.currentItem.id+'']['type']=this.dsType
            },
             async handleMenuNodeClick(data) {
                this.currentItem = data
                if (this.dsType==1) {
                    this.$refs.scopeTree.setCheckedKeys([])
                }
                // 初始化数据结构
                if (!this.checkedDsScope[this.currentItem.id+'']) {
                    this.checkedDsScope[this.currentItem.id+'']={
                        checked: [],
                        type:this.dsType,
                    }
                }else{
                    this.dsType = this.checkedDsScope[this.currentItem.id+''].type
                }

            },
        }	
    }
</script>
```

> 借助handleMenuNodeClick事件我们初始化tree选中空状态,因为在每次选中时我们会调用check把相关节点的id和选中的状态以及下拉的状态都做了关联,只需要在模板里绑定:default-checked-keys="checked"对应的状态即可

### 简化代码

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">

<el-tree 
         :props="props" 
         :data="data1" 
         show-checkbox 
         @node-click="handleMenuNodeClick1">
</el-tree>

<el-tree 
         ref="tree" 
         :props="props" 
         :default-checked-keys="checked" 
         :data="data2" 
         node-key="id" 
         show-checkbox
         @check="handleCheckChange2">
</el-tree>

<script src='https://cdn.bootcss.com/vue/2.5.16/vue.min.js'></script>
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```

```js
   new Vue({
            el: '#app',
            data: function () {
                return {
                    checkedMap: {},
                    currentItem: {},
                    props: {
                        label: 'label',
                        children: 'children',
                        value: 'id',
                    },
                    data1: [{
                        id: 1,
                        label: '学生',
                    }, {
                        id: 2,
                        label: '职场人',
                    }],
                    data2: [{
                        id: 1,
                        label: '工作日',
                        children: [{
                            id: 11,
                            label: '刷牙',
                        }, {
                            id: 12,
                            label: '吃饭',
                        }, {
                            id: 13,
                            label: '上学',
                        }, {
                            id: 14,
                            label: '上班',
                        }]
                    }, {
                        id: 2,
                        label: '周末',
                        children: [{
                            id: 21,
                            label: '睡觉',
                        }, {
                            id: 22,
                            label: '吃饭',
                        }, {
                            id: 23,
                            label: '打游戏',
                        }, {
                            id: 24,
                            label: '补习',
                        }]
                    }]
                }
            },
            computed: {
                checked() {
                    return this.checkedMap[this.currentItem.id + '']
                },
            },
            methods: {
                handleCheckChange2(_, b) {
                    this.checkedMap[this.currentItem.id + ''] = b.checkedKeys
                },
                handleMenuNodeClick1(data) {
                    this.currentItem = data
                    // 初始化数据结构
                    if (!this.checkedMap[data.id + '']) {
                        this.checkedMap[data.id + ''] = []
                    }

                    this.$refs.tree.setCheckedKeys([])
                }
            }
        })
```

### 要点	

1.  node-key="id" 
2. @node-click="handleMenuNodeClick1"
3. script里的methods和computed事件

### 添加接口

> 采用不同的技术选型会有碰到不同的问题, 假如我们一个节点对应不同的状态,势必选择点击节点请求接口的方法,这时我们就不需要点击时初始化数据的对应结构了

```js
methods:{
    async fetchMenuRoleData() {
         this.isMenuRoleLoading = true
         // 后端接口类似fetch
         const raw = await getMenuRole(this.roleId, this.currentItem.id)
         const result = raw.data
         // 每个叶节点对应很多个状态数据类似 [{dsType:xxx,dsScope:'xxx'},{dsType:xxx,dsScope:'xxx'}]
         for (let index = 0; index < result.data.length; index++) {
             const item = result.data[index];
             this.checkedDsScope[item.menuId + ''] = {
                 checked: item.dsScope.split(','),
                 type: item.dsType,
             }
         }
         this.isMenuRoleLoading = false
     }, 
         
	async handleMenuNodeClick(data) {
         this.currentItem = data
         if (this.dsType == 1) {
             this.$refs.scopeTree.setCheckedKeys([])
         }
         // 这里添加scope是利用调用api就可以初始化数据结构,我们在点击时看这个id对应的map有没初始化好,有的话就不要重新调用接口,没有的话才调用接口,这样在我们改变对应节点的关系时,数据不会错乱,因为接口的始终比我们最新没保存操作的状态旧一些
         const scope = this.checkedDsScope[this.currentItem.id + '']
         console.log('scope---->',scope);
         if (!scope) {
             // 假如没有初始化,调用接口顺便就做了初始化操作了
             await this.fetchMenuRoleData()
         }
         // 所以一开始没有初始化调用接口有可能它的值是被赋值成数组有可能是对象,在循环时看后端给的数组length是1还是大于1
         if (this.checkedDsScope[this.currentItem.id + ''].constructor === Array) {
             this.dsType = this.checkedDsScope[this.currentItem.id + ''][0].type
         } else {
             this.dsType = this.checkedDsScope[this.currentItem.id + ''].type
         }
     },
}
```

