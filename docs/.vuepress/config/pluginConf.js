module.exports = [
    ['@vuepress/back-to-top'],
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup:{
            message: 'New content is available.',
            buttonText: 'refresh'
        }
    }],
    ['@vuepress/medium-zoom', {
        selector: 'img.zoom',
    }],
    // [
    //     "vuepress-plugin-auto-sidebar",{
    // }
    // ],
    ['@vuepress/nprogress'],
];