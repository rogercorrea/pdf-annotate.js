var webpack = require('webpack');
var fileName = 'pdf-annotate';
var plugins = [];

if (process.env.MINIFY) {
  fileName += '.min'
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = {
  devtool: 'source-map',
  plugins: plugins,
  entry: './index.js',
  output: {
    path: __dirname + '/build',
    filename: 'dist/' + fileName + '.js',
    library: 'PDFAnnotate',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
            plugins: ['add-module-exports']
          }
        }
      }
    ]
  }
};