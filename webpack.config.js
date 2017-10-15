var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path');

module.exports = {
  entry: {
    background: path.resolve(__dirname, 'src/scripts/background.js'),
    popup: path.resolve(__dirname, 'src/scripts/popup.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'scripts/[name].js'
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      app: path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          cacheDirectory: true
        }
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/popup.html'),
      filename: 'popup.html',
      chunks: ['popup'],
      inject: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true,
      },
    }),
  ]
};
