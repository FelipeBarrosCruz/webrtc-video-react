'use strict'
const NODE_ENV = process.env.NODE_ENV
const DEBUG = NODE_ENV === 'production'
const PRODUCTION_PATH = __dirname.concat('/public/')

const OUTPUT_JS_FILENAME = 'bundle.min.js'
const OUTPUT_JS_FILEPATH = DEBUG ? PRODUCTION_PATH.concat(OUTPUT_JS_FILENAME) : OUTPUT_JS_FILENAME

const OUTPUT_CSS_FILENAME = 'bundle.min.css'
const OUTPUT_CSS_FILEPATH = DEBUG ? PRODUCTION_PATH.concat(OUTPUT_CSS_FILENAME) : OUTPUT_CSS_FILENAME

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    filename: OUTPUT_JS_FILEPATH
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'jsx', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    }]
  },
  plugins: [
    new ExtractTextPlugin(OUTPUT_CSS_FILEPATH, { allChunks: true })
  ]
};
