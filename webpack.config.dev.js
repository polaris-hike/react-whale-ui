const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {// 开发环境配置
    ...base,
    mode: 'development',
    entry:{
        example:'./example.tsx'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'whale-ui',
            template: 'example.html'
        })
    ]
});
