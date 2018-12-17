const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.config')

const rootResolve = file => path.resolve(__dirname, '..', file)

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        historyApiFallback:true,
        contentBase: rootResolve('dist'),
        publicPath: '/',
        port: 9000
    }
})