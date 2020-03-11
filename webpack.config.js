const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: ['@babel/polyfill', "./source/index.js"],
    about: ['@babel/polyfill',"./source/about.js"],
  },
  output: {
    filename: "[name]_bundle.js",
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, "public"),
  },
  devtool: 'inline-source-map', // error를 bundle된 파일이 아닌 원래 파일에서 표시해주는 dev tool
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    hot: true,
  },
  module: {
    rules: [
      { // HMR과 함께 쓰면 css도 hot reload.
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // 뒤에서부터 실행. 체이닝. 불러와서 -> 끼워넣는다
          "sass-loader",
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
            cacheDirectory: true,
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
    }),
    new MiniCssExtractPlugin({ filename:'css/style.css' }),
  ],
  
};
