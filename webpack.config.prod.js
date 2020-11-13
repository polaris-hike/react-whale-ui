const base = require('./webpack.config');

module.exports = Object.assign({}, base, {// 生产环境配置
    ...base,
    mode: 'production',
    externals: {// 打包排除 react reactDOM
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM'
        }
    }
});
