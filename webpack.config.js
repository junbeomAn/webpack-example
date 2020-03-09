const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    index: "./source/index.js",
    about: "./source/about.js",
  },
  output: { 
    path: path.resolve(__dirname, "public"),
    filename: "[name]_bundle.js",    
  },
  module : {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader', // 뒤에서부터 실행. 체이닝. 불러와서 -> 끼워넣는다
        ]
      },
    ],
  },
};