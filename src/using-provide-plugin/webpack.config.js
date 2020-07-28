// プラグイン を利用するためwebpackを読み込んでおく
const webpack = require("webpack");

const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/js/app.js",
    output: {
        filename: "bundle.js",
        path: path.resolve( __dirname, "public/js")
    },
    plugins: [
        // import しなくてもモジュールを使用できるようにする。
        new webpack.ProvidePlugin({
            // 変数＄でjqueryを使用できる
            $: "jquery"
        })
    ]
}