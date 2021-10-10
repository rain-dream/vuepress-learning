const head = require('./config/headConf.js');
const plugin = require('./config/pluginConf.js');
const nav = require('./config/navConf.js');
const sidebar = require('./config/sidebarConf.js');

module.exports = {
    base: '/docs/',
    title: '雨梦',
    description: '雨梦的梦',
    // permalink: "/:year/:month/:day/:slug",
    head: head,
    plugins: plugin,
    themeConfig: {
        lastUpdated: "最后更新时间",  // lastUpdated只能在一个基于Git的项目中启动
        logo: '/assets/img/tongji.jpg',
        nav: nav,
        sidebar: sidebar,

        // sidebar: {
        //     '/css/': [
        //         '',
        //         'c-aaa',
        //         'c-bbb',
        //         'c-ccc',
        //     ],
        //
        //     '/javascript/': [
        //         '',
        //         'j-aaa',
        //         'j-bbb',
        //         'j-ccc',
        //     ],
        //
        //     // fallback
        //     '/': [
        //         '',
        //         'about'
        //     ]
        // }
    },
    configureWebpack:{
        resolve:{
            alias:{
                '@img': '/.vuepress/public/assets/img'
            }
        }
    }
}