// Dependencies
import webpack from 'webpack';

// Config
import { paths } from "./gulpfile.babel.js/config";

const path = require('path');

// Plugins
let WebpackNotifierPlugin = require('webpack-notifier');

const webpackConfig = {

  mode: process.env.NODE_ENV ? "production" : "development",

  entry: {
    main: paths.scripts.src
  },
  output: {
    filename: '[name].js',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          minSize: 0
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /^(?!.*\.{test,min}\.js$).*\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s?css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new WebpackNotifierPlugin({
      skipFirstNotification: true
    })
  ],

  resolve: {
    alias: {
      Modules: path.resolve(__dirname, 'src/modules/'),
      Fragments: path.resolve(__dirname, 'src/js/fragments/'),
      Utils: path.resolve(__dirname, 'src/js/utils/'),
    }
  }

};

if (process.env.NODE_ENV === 'production') {
  webpackConfig.devtool = 'source-map';
}
if (process.env.NODE_ENV === 'development') {
}

module.exports = webpackConfig;
