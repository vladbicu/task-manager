const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules, server, tests/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: "./public"
  }
};

module.exports = config;
