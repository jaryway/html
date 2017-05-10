var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var config = require('../config')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'

var CSS_PATH_FORMAT = 'css/[name].[contenthash:8].css'

module.exports = merge(baseWebpackConfig, {

  devtool: '#cheap-module-eval-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),

    new ExtractTextPlugin({
      filename: CSS_PATH_FORMAT,
      allChunks: false
    }),

    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'news_list.html',
      template: 'news_list.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'news_detail.html',
      template: 'news_detail.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'product_list.html',
      template: 'product_list.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'product_detail.html',
      template: 'product_detail.html',
      inject: true
    }),
  ]
})