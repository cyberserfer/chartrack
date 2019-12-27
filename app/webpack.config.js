const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    resolve: {
      alias: {
        Shared: path.resolve(__dirname, 'src/Shared/'),
        Utils: path.resolve(__dirname, 'src/Utils/'),
        Components: path.resolve(__dirname, 'src/Components/')
      }
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}
