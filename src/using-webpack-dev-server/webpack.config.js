const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/js/app.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public/js"),
        // ブラウザから出力したファイルにアクセスする際のパス
        // これを正しくしないとライブラリのロードが有効にならない。
        publicPath: "/js/"
    },
    devServer: {
        open: true,
        host: "0.0.0.0",         // dockerコンテナを使用する場合は必要
        disableHostCheck: true,  // dockerコンテナを使用する場合は必要
        port: 9000,
        // ブラウザ起動時に./public/index.htmlが開かれる
        contentBase: "./public"
    }
}