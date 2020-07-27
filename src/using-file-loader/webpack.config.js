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
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                include: path.resolve( __dirname, "src/images"),
                loader: "url-loader",
                options: {
                    /**
                     * 画像のファイルサイズが８KB以上だったらDataURLに変換せずに出力する
                     */
                    limit: 8192,
                    /**
                     * 出力するDataURLに変換しなかった画像の名前
                     * [name].[ext]は[バンドル前のファイル名].[バンドル前の拡張子]なので
                     * 今回はbackground.jpgが出力される
                     */
                    name: "[name].[ext]",
                    /**
                     * DataURLに変換しなかった画像の出力先
                     * デフォルトではoutput.pathに指定したパスに出力される
                     * 今回はpublic/imagesに出力させたいため、相対パスを指定する。
                     */
                    outputPath: "../images",
                    /**
                     * 出力されるファイルから画像の読み込み先
                     * 今回はpublic/index.htmlからpublic/imagesの画像を
                     * 読み込みたいため、以下の指定になる
                     */
                    publicPath: path => "./images/" + path
                }
            }
        ]
    }
}

/**
 * 補足
 * 利用するローダーが複数の場合はuseを使う
 * 利用するローダーが一つの場合はuseを省略できる。
 */