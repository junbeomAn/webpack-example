const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./source/index.js",
    about: "./source/about.js"
  },
  output: {
    filename: "[name]_bundle.js",
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader" // 뒤에서부터 실행. 체이닝. 불러와서 -> 끼워넣는다
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.m?js&/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./source/index.html",
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./source/about.html",
      chunks: ["about"]
    })
  ],
  
};
