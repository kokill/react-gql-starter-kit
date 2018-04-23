const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['./client/index.js', 'webpack-hot-middleware/client'],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  mode: 'development',
  output: {
    publicPath: '/',
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
  },
  devtool: 'cheap-module-source-map',
  // externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'development'`,
      },
    }),
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: path.resolve(process.cwd(), 'public/index.html'),
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
