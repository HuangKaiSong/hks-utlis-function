const path = require('path')
module.exports = {
    // 修改默认的入口
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        // vue默认@指向src目录，这里要修正为examples，另外新增一个~指向packages
        config.resolve.alias
            .set('@', path.resolve('src'))
            .set('~', path.resolve('packages'));
        // examples/docs是存放md文档的地方，也不需要eslint检查
        config.module
            .rule('eslint')
            .exclude.add(path.resolve('lib'))
            .end();
        // packages和examples目录需要加入编译
        config.module
            .rule('js')
            .include.add(/packages/)
            .end()
            .include.add(/src/)
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options;
            });
    }
};