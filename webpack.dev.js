const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(nodu_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
};
