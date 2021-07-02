module.exports = [
    [
        "@vuepress-reco/vuepress-plugin-rss", //RSS插件
        {
            site_url: "https://tsanfer.xyz", //网站地址
            copyright: "Tsanfer", //版权署名
        },
    ],
    ["flowchart"], // 支持流程图
    ["vuepress-plugin-smooth-scroll"], // 平滑滚动
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
    ['@vuepress-reco/extract-code'],
    ["vuepress-plugin-code-copy", true], //一键复制代码插件
]