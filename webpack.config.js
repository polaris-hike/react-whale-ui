const path = require('path');
var webpack = require('webpack');
module.exports = { // webpack 开发生产环境共有配置
    entry: {// 入口
        index: './lib/index.tsx'
    },
    resolve: {// 识别文件
        extensions: ['.ts', '.tsx', '.js', '.jsx',]
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
            },
            {
                test:/\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test:/\.scss$/,
                loader: ['style-loader','css-loader','sass-loader']
            }
        ]
    }
};
