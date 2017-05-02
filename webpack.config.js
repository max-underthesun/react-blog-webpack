/* eslint-disable */

import path from 'path';
import webpack from 'webpack';
// var path = require('path');
// var webpack = require('webpack');

const root = path.join(process.cwd(), 'src');
// var root = path.join(process.cwd(), 'src');

// module.exports = {
export default {
  entry: [
    'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://localhost:3000',
    // 'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    './src/index.js'
  ],

  output: {
    // path: path.join(__dirname, 'dist'),
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1'
        ]
      },
      { test: /\.(eot|png|ttf|svg|woff|woff2)$/, loader: 'url-loader'}
    ]
  },
  resolve: {
    root: root
  },
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
