/**
 * putput.pathに指定するOSによって異なることを
 * 防ぐためにpathモジュールを読み込んでおく
 */
const path = require("path");


/**
module.exports = {
  mode: モードの設定("development", "production", "none"),
  entry: エントリポイントの設定,
  output: {
    filename: 出力するファイル名,
    path: 出力先のパス（絶対パスで指定する必要がある）,
  }
};
 */
module.exports = {
  mode: "development",
  entry: "./src/js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/js"),
  }
};