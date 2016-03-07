var path = require('path');
var webpack = require('webpack');


module.exports = {
  target: 'web',
  devtool: 'source-map',
  cache: false,
  debug: false,
  entry: {
    web:'./src/frontend/index'
  },
  output: {
    path: path.join(__dirname, 'server', 'public', 'assets'),
    filename: 'bundle.[name].js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel']
      },
      { test: /\.(jpe?g|png|gif|svg|woff|woff2)$/i, loader: 'file-loader' },
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};