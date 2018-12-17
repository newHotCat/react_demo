const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')
const HappyPack = require('happypack');
const os = require('os')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const rootResolve = file => path.resolve(__dirname, '..', file)
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });


const commonOptions = {
  chunks: 'all',
  reuseExistingChunk: true
}

module.exports = {
  entry: {app: rootResolve('src/app.js')},
  output: {
    filename: 'static/js/[name].[chunkhash:8].js',
    path: rootResolve('dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [
          rootResolve('src')
        ],
        exclude: [
          /[\\/]node_modules[\\/]/
        ],
        loader: 'babel-loader'
        // use: 'happypack/loader'
      },
      {
        test: /\.css$/,
        use: [ 
        MiniCssExtractPlugin.loader,
        // 'style-loader', 
        'css-loader' ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // name: 'static/css/font/[name].[hash:7].[ext]' 暂时没用上 png 中使用
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    splitChunks: {
      maxInitialRequests: 4, // 设置一个入口最大chunk 数 默认是3个
      cacheGroups: {
        polyfill: {
          name: 'polyfill',
          test: /[\\/]node_modules[\\/](core-js|raf|@babel|babel)[\\/]/,
          priority: 2,
          ...commonOptions
        },
        dll: {
          name: 'dll',
          test: /node_modules[\\/](react|react-dom)[\\/]/,
          priority: 1,
          ...commonOptions
        },
        commons: {
          name: 'commons',
          minSize: 0,
          priority: 0,
          // minChunks: 1,
          ...commonOptions
        }
      },
    },
    runtimeChunk: true, // 打包runtime 代码
    minimizer: [ // 混淆，丑化代码 默认为true
      new OptimizeCssAssetsPlugin({}),
      new UglifyJsPlugin({
        uglifyOptions: {
          ecma: 6,
          cache: true,
          parallel: true
        }
      })
    ]
  },
  plugins: [
    // new HappyPack({
    //   // 3) re-add the loaders you replaced above in #1:
    //   loaders: [ 'babel-loader' ],
    //   threadPool: happyThreadPool
    // }),
    new HtmlWebpackPlugin({
      template: rootResolve('src/template.html')
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "static/css/[name].css",
      chunkFilename: "static/css/[id].[contenthash:8].css"
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    }),
    new CleanWebpackPlugin(['dist'],{
      root: rootResolve('')
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/)
  ]
};