var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var sassLoaders = [
  'css-loader?sourceMap',
  'postcss-loader',
  'sass-loader?sourceMap'
];

module.exports = {
  target: 'web',
  devtool: 'source-map',
  cache: false,
  debug: false,
  entry: {
    web:'./src/frontend/index'
  },
  output: {
    path: path.join(__dirname, 'src', 'server', 'public', 'assets'),
    filename: 'bundle.[name].js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new ExtractTextPlugin('bundle.[name].css')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src', 'frontend')
      },
      { test: /\.(jpe?g|png|gif|svg|woff|woff2)$/i, loader: 'file-loader' },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      { include: /\.json$/, loader: 'json-loader' }
    ]
  },
  sassLoader: {
    includePaths: [path.join(__dirname, 'src', 'frontend', 'scss')]
  },
  postcss: function () {
    return [autoprefixer({ browsers: ['last 2 Chrome versions'] })]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};