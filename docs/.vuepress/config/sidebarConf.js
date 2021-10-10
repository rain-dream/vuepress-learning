module.exports = [
    'about',
    {
        title: 'poems',  // 必要的
        path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            '/css/poems1',
            '/css/poems2',
        ]
    },
    {
        title: 'philosophy',  // 必要的
        path: '/javascript/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            '/javascript/philosophy1',
            '/javascript/philosophy2',
        ]
    }
]