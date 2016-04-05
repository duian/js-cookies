var webpack = require('webpack');
var port = 8088;
var hostname = 'localhost';
module.exports = {
  entry: 'mocha!./test/cookies.spec.js',
  output: {
    filename: 'cookies.build.js',
    path: '/tests/',
    publicPath: 'http://' + hostname + ':' + port + '/tests'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015'],
        }
      }
    ]
  },
  devServer: {
    port: port,
    host: hostname,
  }
}