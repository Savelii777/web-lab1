const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
 entry: './src/index.js',
 output:{
    filename: 'bungle.[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
 },
 devServer: {
   static: {
     directory: path.join(__dirname, 'dist'),
   },
   compress: true,
   port: 9000,
 },
 plugins: [
   new HTMLPlugin({
      template: './index.html'
   }),
   new CleanWebpackPlugin()
],
 module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
 },

 mode: 'development',}
