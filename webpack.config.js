'use strict';

const path = require('path');
const BabiliPlugin = require('babili-webpack-plugin');

module.exports = (env, ...flags) => Object.assign(
{
  entry: {
    './': [
      './src/index.js',
    ],
    './pages/popup/dist/': './src/pages/popup/src/index.jsx',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },

    ],

  },
}, env === 'prod' ? {

    // Production

    plugins: [
      new BabiliPlugin(),
    ],

  } : {

    // Development

    devtool: 'source-map',

  }
);
