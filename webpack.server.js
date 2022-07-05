const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExtenals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const serverConfig = {
  target: 'node',

  entry: './src/server.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [webpackNodeExtenals()],
};

module.exports = merge(baseConfig, serverConfig);
