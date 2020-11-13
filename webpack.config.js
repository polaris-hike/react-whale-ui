const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'whale-ui',
            template: 'index.html'
        })
    ],
    externals: {// 打包排除 react reactDOM
        react:{
            commonjs:'react',
            commonjs2:'react',
            amd:'react',
            root:'React'
        },
        'react-dom':{
            commonjs:'react-dom',
            commonjs2:'react-dom',
            amd:'react-dom',
            root:'ReactDOM'
        }
    }
}
;
