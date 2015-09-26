var path = require('path');
var webpack = require('webpack');
var ROOT = path.resolve(path.join('.', 'src'));

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: [ ROOT ],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'autoprefixer']
    }, {
      test: /\.wav$/,
      loaders: [ 'file']
    }]
  }
};
