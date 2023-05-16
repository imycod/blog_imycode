function createVue() {
    return [
        {
            text: '',
            items: [
                {
                    text: '挂载',
                    link: '/source/vue/mount'
                },
                {
                    text: '渲染',
                    link: '/source/vue/render/',
                    items: [
                        {
                            text: '对children处理',
                            link: '/source/vue/render/children'
                        }
                    ]
                },
            ]
        },
       
    ]
}

export {
    createVue
}
