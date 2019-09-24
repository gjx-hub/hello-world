const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
module.exports = {
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open:true,
        // contentBase:'src',
        port:3000,
        hot:true
    },
    rules: [
        // ... 其它规则
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        }
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',

        }),
        new VueLoaderPlugin()
    ]
}