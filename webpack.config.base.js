/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const NODE_ENV = process.env.NODE_ENV || 'development';
let VERSION;

if (NODE_ENV === 'production') {
  const { version } = require('./package.json');
  const revision = require('child_process')
    .execSync('git rev-parse HEAD')
    .toString().trim();

  VERSION = `${version}#${revision}`;
}

module.exports = {
  context: `${__dirname}/src`,
  resolve: {
    root: [
      path.resolve('./src'),
    ],
    extensions: ['', '.js', '.jsx'],
  },
  postcss: () => ([autoprefixer({ browsers: ['last 2 versions'] })]),
  sassLoader: {
    includePaths: [
      path.join(__dirname, 'src'),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        VERSION: JSON.stringify(VERSION),
        TOKEN_RENEWAL_INTERVAL: JSON.stringify(process.env.TOKEN_RENEWAL_INTERVAL),
        APP_HOST: JSON.stringify(process.env.APP_HOST),
        APP_PORT: JSON.stringify(process.env.APP_PORT),
        APP_PROTOCOL: JSON.stringify(process.env.APP_PROTOCOL),
        API_HOST: JSON.stringify(process.env.API_HOST),
        API_PROTOCOL: JSON.stringify(process.env.API_PROTOCOL),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader?name=[path][name].[hash].[ext]',
      },
      {
        test: /\.(woff|woff2|eot|ttf|gif)(\?.*$|$)/,
        loader: 'file-loader',
      },
      {
        test: /\.(svg)(\?.*$|$)/,
        loader: 'url-loader',
      },
      {
        test: /favicon.ico$/,
        loader: 'file-loader?name=[path][name].[ext]',
      },
    ],
  },
};
