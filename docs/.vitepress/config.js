import {projectNav} from "./configs/project.js"
import {createVue} from "./configs/subject/vue.js"

module.exports = {
    title: 'WXS的博客',
    description: 'Just playing around.',
    outlineTitle: '本页目录',
    anchor: { permalink: false },
    head: createHead(),
    search: true,
    // 主题配置
    themeConfig: {
        repo: '源码学习',
        docsRepo: '2年以上资深大佬带你玩转前端.',
        logo: '/img/linktolink.png',
        docsBranch: 'main',
        editLinks: false,
        editLinkText: '为此页面提供修改建议',
        //   头部导航
        nav: createNav(),
        //   侧边导航
        sidebar: createSidebar(),
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present 武兴师'
        }
    }
}

function createNav() {
    return [
        ...projectNav,
    ]
}

function createSidebar() {
    return {
        '/source/vue/': createVue(),
    }
}

function createHead() {
    return [
        // 改变title的图标
        [
            'link',
            {
                rel: 'icon',
                href: '/assets/img/linktolink.png',//图片放在public文件夹下
            },
        ],
    ]
}
