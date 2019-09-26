const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        // contentBase:'src',
        port: 3000,
        hot: true,
        proxy:{
            '/api':{
                target:'http://39.97.33.178',
                changeOrgin:true
            }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'src/index.html'),//为什么修改这？
            filename: 'index.html',

        }),
        new VueLoaderPlugin()
    ],
    module: {
        // 配置的loader解析的规则
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(ttf|woff|eot|svg|woff2)$/,
            loader: 'url-loader'
        }, {
            test: /\.less$/,
            loader: ['style-loader', 'css-loader', 'less-loader']
        }]

    },
    resolve:{
        alias:{
            '@':path.join(__dirname,'src')
        }
    }
}



