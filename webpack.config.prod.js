const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const modStyle = new ExtractTextPlugin('[name].style.css');
const vendorStyle = new ExtractTextPlugin('[name].vendor.css');
const pathsToClean = path.join(__dirname, './public/dist');

module.exports = {
  entry: {
    site: './src/site/index.js',
    dashboard: './src/dashboard/index.js'
  },
  output: {
    path: path.resolve('./', 'public/dist/'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.s?css$/,
        include: [path.join(__dirname, '/src/')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: { modules: true } }, 'sass-loader', {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('autoprefixer')()
              ]
            }
          }]
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['env', 'react'],
              plugins: [
                'transform-runtime',
                'transform-object-rest-spread',
                'add-module-exports',
                'syntax-dynamic-import',
                'transform-class-properties',
                ['import', {
                  libraryName: 'antd',
                  style: 'css'
                }]
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
    new CleanWebpackPlugin(pathsToClean),
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(), //dedupe similar code 
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks
  ],
  resolve: {
    modules: [path.resolve('./'), 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
};
