const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'production',
    entry: {// 入口
        index: './lib/index.tsx'
    },
    output: {// 出口
        path: path.resolve(__dirname, 'dist/lib'), // 操作系统目录不同,windows,linux 是 / ，mac 是\。所以得用path.resolve
        library: 'whale',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // 对tsx或ts文件用awesome-typescript-loader 进行转义，因为浏览器不识别ts文件
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'whale-ui',
            template: 'index.html'
        })
    ]
};
