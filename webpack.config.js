const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = {
  node: {
    __filename: true,
  },
  context: path.join(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpeg|jpg)$/,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    // Have React deal with 404 requests
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL),
    }),
  ],
};
