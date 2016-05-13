/* global __dirname */

var path = require('path');
var webpack = require('webpack');
var dir_js = path.resolve(__dirname, 'app');
var dir_css = path.resolve(__dirname, 'css');
var dir_build = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'index.js')
  },
  output: {
    path: dir_build,
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', dir_js],
  },
  devServer: {
    contentBase: dir_build,
  },
  stats: {
    colors: true,
    chunkModules: false
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.js($|\?)|\.jsx($|\?)/,
        exclude: /node_modules/,
        presets: ['es2015', 'react']
      },
      {
        loader: 'file?name=/[name].html',
        test: /\.html$/
      },
      {
        loader: 'style!css',
        test: /\.css$/
      }
    ]
  }
}
