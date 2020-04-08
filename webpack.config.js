const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  resolve: {
    modules: ['node_modules'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          presets: [
            '@babel/preset-env',
            {
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          ],
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: [/\.(png|jpe?g|gif)$/i, /\.ejs$/],
        use: [
          { loader: 'file-loader' },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
