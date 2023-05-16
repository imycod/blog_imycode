import { configsNav } from "./configs/index.js"
import { createVue } from "./configs/subject/vue.js"
import { createArrays } from "./configs/subject/utils.js"
import { createGokedu } from "./configs/subject/project.js"
import algolia from "./algolia.js"

import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
// import { SitemapStream } from 'sitemap'
import { defineConfig, PageData } from 'vitepress'

const links: { url: string; lastmod: PageData['lastUpdated'] }[] = []

module.exports = defineConfig({
    title: '武兴师的博客',
    description: 'Just playing around.',
    anchor: { permalink: false },
    head: createHead(),
    search: true,
    outlineTitle: '本页目录',
    // 主题配置
    themeConfig: {
        repo: '前端职业生涯',
        docsRepo: '2年以上资深大佬带你玩转前端.',
        logo: '/img/linktolink.png',
        docsBranch: 'main',
        editLinks: false,
        editLinkText: '为此页面提供修改建议',
        algolia,
        //   头部导航
        nav: createNav(),
        //   侧边导航
        sidebar: createSidebar(),
        outline: [2, 3, 4, 5, 6],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present 武兴师'
        }
    },
    /* 站点地图 */
    transformHtml: (_, id, { pageData }) => {
        if (!/[\\/]404\.html$/.test(id))
            links.push({
                url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
                lastmod: pageData.lastUpdated
            })
    },
    // buildEnd: async ({ outDir }) => {
    //     // hostname 为线上域名
    //     const sitemap = new SitemapStream({ hostname: 'https://notes.fe-mm.com/' })
    //     const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    //     sitemap.pipe(writeStream)
    //     links.forEach((link) => sitemap.write(link))
    //     sitemap.end()
    //     await new Promise((r) => writeStream.on('finish', r))
    // }
})

function createNav() {
    return [
        ...configsNav,
    ]
}

function createSidebar() {
    return {
        '/source/vue/': createVue(),
        '/utils/array/': createArrays(),
        '/project/gokedu/': createGokedu(),
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
