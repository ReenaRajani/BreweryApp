const HtmlWebPackPlugin = require('html-webpack-plugin');
const apiMocker = require('connect-api-mocker');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    before(app) {
      app.use('/api', apiMocker('mock-api'));
    },
  },
};
