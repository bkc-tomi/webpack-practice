const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        app: "./src/js/app.js",
        app2: "./src/js/app2.js",
        app3: "./src/js/app3.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public/js")
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    // node_modules配下のモジュールをバンドルする
                    test: /node_modules/,
                    // vendor.bundle.jsが出力される。
                    name: "vendor",
                    // 共通するモジュールとしてバンドルする対象の設定
                    chunks: "initial",
                    // splitChunksの設定を無効にする
                    enforce: true
                }
            }
        }
    }
}