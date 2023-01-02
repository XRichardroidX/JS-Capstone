const path = require('path');

 module.exports = {
  entry: './src/index.js',
    devServer: {
    static: './dist',
     },
    optimization: {
    runtimeChunk: 'single',
  },
   output: {
     filename: '[name].js',
     path: path.resolve(__dirname, 'dist'),
   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
     },
   plugins: [new HtmlWebpackPlugin()],
 };