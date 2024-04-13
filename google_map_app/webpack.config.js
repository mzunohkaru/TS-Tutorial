const path = require("path");
 
module.exports = {
  mode: "development",
  // エントリーポイント（実行を開始する場所）
  entry: "./src/app.ts",
  output: {
    // 出力するファイル名
        // filename: 'bundle.[contenthash].js',
    filename: "bundle.js",
    // 出力先のフォルダー(path.resolve : 絶対パス)
    path: path.resolve(__dirname, "dist"),
    // webpack-dev-server専用
    // webpackの出力先を参照するパスをサーバーのルートからの相対パスで指定
    publicPath: "/dist",
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
  //   devtool: "eval",
  // 元のソースコードと最終的にブラウザで実行されるコードの間にマッピングを作成
  devtool: "inline-source-map",
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

    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
    }
  },
};