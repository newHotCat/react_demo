const merge = require('webpack-merge')
const common = require('./webpack.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebapckPlugin = require('compression-webpack-plugin')

module.exports = merge(common, {
    // mode: 'development',
    mode: 'production',
    devtool: 'none',
    plugins: [
        new CompressionWebapckPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css)(\?.*)?$/i,
            cache: true,
            // 仅处理大于此大小的资产。以字节为单位
            threshold: 10240,
            minRatio: 0.8
        })
        // new BundleAnalyzerPlugin()
    ]
})