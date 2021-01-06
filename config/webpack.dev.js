const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
 entry: {
    app: [
      'webpack-hot-middleware/client?reload=true&timeout=1000',
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/, // regex to see which files to run babel on
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: ['@babel/preset-env','@babel/preset-react'],
            plugins: [
              require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        },
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin({
        overlay: {
          sockIntegration: 'whm',
        }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
});
