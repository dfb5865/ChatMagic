var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'web',
  devtool: 'cheap-eval-source-map',
  cache: true,
  debug: true,
  entry: {
    web:[
      'webpack-hot-middleware/client',
      './src/frontend/index'
    ]
  },
  output: {
    path: "./src/server/public/assets/"
    filename: 'bundle.[name].js',
    publicPath: '/public/assets/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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