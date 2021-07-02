const head = require('./config/head')
const nav = require('./config/nav')
const plugins = require('./config/plugins')
const friendLink = require('./config/friendLink')

module.exports = {
    base: '/',
    // 输出目录
    dest: 'public/notebook',
    // host: '0.0.0.0',  // 生成网页地址（本地调试使用）
    // port: '22335',  // 生成网页端口（本地调试使用）
    title: "hks Blog", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: "兽人族永不为奴", // meta 中的描述文字，用于SEO
    head,
    theme: "reco", //选择主题‘reco’
    themeConfig: {
        type: "blog", //选择类型博客
        fullscreen: true,
        blogConfig: {},
        nav,
        sidebar: 'auto', //在所有页面中启用自动生成侧栏
        record: "蜀ICP备20005033号-1",
        recordLink: "https://icp.chinaz.com/tsanfer.xyz",
        cyberSecurityRecord: "川公网安备 51110202000301号",
        cyberSecurityLink:
            "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51110202000301",
        startYear: "2021", // 项目开始时间，只填写年份
        lastUpdated: "最后更新时间", // string | boolean
        author: "小可爱天下无敌",
        // authorAvatar: "/avatar.svg", //作者头像
        mode: "light", //默认显示白天模式
        friendLink
        // 评论设置
        // valineConfig: {
        //     appId: process.env.LEANCLOUD_APP_ID,
        //     appKey: process.env.LEANCLOUD_APP_KEY,
        // },
    },

    markdown: {
        lineNumbers: true, //代码显示行号
    },
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,

    // 插件
    plugins,
};