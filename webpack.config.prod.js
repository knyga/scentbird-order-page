/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');
const url = require('url');
const config = require('./src/configs/common');
const _ = require('lodash');
const baseConfig = require('./webpack.config.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prodConfig = {
  entry: [
    'babel-polyfill',
    './index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    // publicPath: `${url.format(_.assign(config.app.url, { pathname: 'static', port: null }))}/`,
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true,
      },
    }),
    new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true }),
    new HtmlWebpackPlugin({
      template: 'indexProd.html',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss!sass?outputStyle=expanded&sourceMap'),
        include: [
          /src/,
          /weblab.technology/,
        ],
      },
    ],
  },
};

module.exports = _.mergeWith(baseConfig, prodConfig, (objValue, srcValue) => {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
});
