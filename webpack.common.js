const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const {EnvironmentPlugin} = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // new CleanWebpackPlugin(),
    // new EnvironmentPlugin(['REACT_APP_API_KEY']),
    // new EnvironmentPlugin(['REACT_APP_AUTH_DOMAIN']),
    // new EnvironmentPlugin(['REACT_APP_PROJECT_ID']),
    // new EnvironmentPlugin(['REACT_APP_STORAGE_BUCKET']),
    // new EnvironmentPlugin(['REACT_APP_MESSAGING_SENDER_ID']),
    // new EnvironmentPlugin(['REACT_APP_APP_ID']),
    // new EnvironmentPlugin(['REACT_APP_MEASUREMENT_ID']),
  ],
};
