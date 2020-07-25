//generate the index.html file in the build directory with all the JS and CSS dependencies
const HtmlWebpackPlugin = require("html-webpack-plugin");

//extract sass files from the component and provides it to sass loader to compile
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//import path module
const path = require("path");

module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        }),
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunksSortMode: "none",
    }),
    new ExtractTextPlugin("style.css"),
  ],
};
