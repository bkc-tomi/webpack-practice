const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve( __dirname, "public/js")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve( __dirname, "src/scss"),
        use: [
          /**
           * style-loader: HTMLに変換したCSSのスタイルが記述された<style>tagを追加する
           * css-loader: cssをモジュールに変換する
           * sass-loader: SassをCSSにコンパイルする
           * 
           * ※ローダーは指定した順番の逆から実行されるので記述の順番には気を付ける。
           */
          "style-loader", "css-loader", "sass-loader"
        ]
      }
    ]
  }
}