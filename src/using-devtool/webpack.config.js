const webpack = require("webpack");

const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/js/app.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public/js")
    },
    // エラーのおきたソースファイルを追跡可能
    devtool: "cheap-module-eval-source-map"
}