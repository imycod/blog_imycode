function createVue() {
    return [
        {
            text: '指南',
            items: [
                {
                    text: '文档1',
                    link: '/source/vue/'
                },
                {
                    text: '渲染',
                    link: '/source/vue/render/',
                    items: [
                        {
                            text: '文档2',
                            link: '/source/vue/render/children'
                        }
                    ]
                },
            ]
        }
    ]
}

export {
    createVue
}
