const path = require('path');
module.exports = {
    entry: {
        app: path.join(__dirname, '../client/app.js')
    },
    output: {
        filename: "[name].[hash].js",
        // 依赖树有更改, hash就更改, 达到最长使用个浏览器缓存的目的

        path: path.join(__dirname, '../dist'),

        publicPath: "",
        // 区分静态资源, 还是api请求
    }
}