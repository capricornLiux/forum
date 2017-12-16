const path = require('path');
module.exports = {
    // 添加工作环境
    target: 'node',

    entry: {
        app: path.join(__dirname, '../client/server.entry.js')
    },
    output: {
        filename: "server-entry.js",
        // 依赖树有更改, hash就更改, 达到最长使用个浏览器缓存的目的

        path: path.join(__dirname, '../dist'),

        publicPath: "/public",

        // 区分静态资源, 还是api请求

        libraryTarget: "commonjs2"
    },

    module: {
        rules: [
            // loaders
            {
                test: /.jsx$/,
                loader: 'babel-loader'
                // babel-loader支持jsx的编译, jsx官方默认编译工具
                // babel-loader是一个webpack的插件, 还需要babel的核心代码babel-core
                // babel需要配置, 默认编译es6的代码
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            }

        ]
    }
}