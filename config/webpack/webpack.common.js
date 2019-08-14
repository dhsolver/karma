const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { getEnvHash } = require('../utils');
const requiredVars = require('../env-vars.json');
const rules = require('./rules');
const paths = require('./paths');

const envHash = getEnvHash(requiredVars);

module.exports = {
  entry: paths.entryPath,
  module: {
    rules
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['*', '.js', '.jsx', '.css']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': envHash
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.templatePath,
      favicon: './src/assets/favicon.png',
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        minifyURLs: true,
        removeComments: true,
        removeAttributeQuotes: true
      }
    })
  ]
};
