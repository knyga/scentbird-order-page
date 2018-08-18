/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');
const url = require('url');
const config = require('./src/configs/common');
const _ = require('lodash');
const baseConfig = require('./webpack.config.base');

const hotReloadUrl = url.format(Object.assign({}, config.app.url, { pathname: '/__webpack_hmr' }));

const devConfig = {
  devtool: 'cheap-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?path=${hotReloadUrl}`,
    './index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: `${url.format(_.assign(config.app.url, { pathname: 'static' }))}/`,
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss!sass?outputStyle=expanded&sourceMap',
      },
    ],
  },
};

module.exports = _.mergeWith(baseConfig, devConfig, (objValue, srcValue) => {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
});
