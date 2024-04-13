const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

//* 本場尿

module.exports = {
  mode: "production",
  // エントリーポイント（実行を開始する場所）
  entry: "./src/app.ts",
  output: {
    // 出力するファイル名
        // filename: 'bundle.[contenthash].js',
    filename: "bundle.js",
    // 出力先のフォルダー(path.resolve : 絶対パス)
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, "dist"),
        publicPath: "/dist",
      },
      {
        directory: __dirname,
        publicPath: "/",
      },
    ],
  },
    devtool: "none",
  module: {
    rules: [
      {
        // .tsで作成されたファイルに、ts-loaderを適用する
        test: /\.ts$/,
        use: "ts-loader",
        // node_modulesフォルダに、ts-loaderを適用しない
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // .tsや.jsという拡張子を持つファイルを自動的に認識できる
    extensions: [".ts", ".js"],
  },
  // ビルド前に、distフォルダの中身をクリアする
  plugins: [
    new CleanWebpackPlugin(),
  ],
};

