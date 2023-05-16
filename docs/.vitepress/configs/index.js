// 这个是点击导航重定向的配置文件
const configsNav = [
    {
        text: '基础知识',
        items: [
            {text: 'python', link: '/base/py/'},
        ]
    },
    {
        text: '源码',
        items: [
            // {text: 'vue', link: '/source/vue/'},
            {text: 'vue', link: '/source/vue/render/children'}, // 临时
        ]
    },
    {
        text: '项目',
        items: [
            {text: '飞机大战', link: '/project/planwar/'},
            {text: '西普大陆', link: '/project/xpdl/'},
            {text: '河狸教学平台', link: '/project/gokedu/'},
            {text: 'pigx', link: '/project/pigx/'},
            {text: 'ehr', link: '/project/ehr/'},
        ]
    },
    {
        text: '工具函数',
        items: [
            {text: 'array', link: '/utils/array/'},
            // {text: 'array', link: '/utils/array/tree/filterTreeByKey.md'},
        ]
    },
]

export {
    configsNav,
}
