var webpack = require('webpack');

module.exports = {
  entry: './docs/main.js',

  output: {
    filename: 'index.js',
    path: __dirname + '\docs'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
