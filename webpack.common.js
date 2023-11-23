const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');
const {EnvironmentPlugin} = require('webpack');
dotenv.config();

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
    new CleanWebpackPlugin(),
    new EnvironmentPlugin([
      'REACT_APP_API_KEY',
      'REACT_APP_AUTH_DOMAIN',
      'REACT_APP_PROJECT_ID',
      'REACT_APP_STORAGE_BUCKET',
      'REACT_APP_MESSAGING_SENDER_ID',
      'REACT_APP_APP_ID',
      'REACT_APP_MEASUREMENT_ID',
    ]),
    new EnvironmentPlugin(['REACT_APP_BASEURL', 'REACT_APP_BASE_DOMAIN']),
    new EnvironmentPlugin([
      'REACT_APP_ACCESS_KEY_ID',
      'REACT_APP_SECRET_ACCESS_KEY',
      'REACT_APP_BUCKET',
      'REACT_APP_REGION',
    ]),
  ],
};
