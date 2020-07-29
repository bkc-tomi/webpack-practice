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
        port: 9000,
        // ブラウザ起動時に./public/index.htmlが開かれる
        contentBase: "./public"
    }
}