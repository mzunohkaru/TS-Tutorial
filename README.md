## JS生成
$ npx tsc app.ts

## Watchモード

### app.tsのみ
$ npx tsc app.ts -w

### プロジェクト全体
$ npx tsc --init

$ npx tsc

$ npx tsc -w

### web pack
$ npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin

## bundle.js生成
$ npx webpack --mode production

## JSライブラリ
❌$ npm i -D lodash
⭕️$ npm i -D @types/lodash <-js用のライブラリをtypescript用にした

$ npm i class-transformer --save
$ npm i reflect-metadata --save

$ npm i class-validator --save

### Httpリクエスト ライブラリ
$ npm i --save axios
### Google Maps APIのメソッドやプロパティをコーディング中に自動で補完してくれるライブラリ
$ npm i -D @types/googlemaps

### Express
## 本番環境に必要なパッケージ
$ npm i --save express body-parser
## 開発環境に必要なパッケージ
$ npm i -D nodemon @types/node @types/express @types/body-parser

###
$ echo 'export {};' > src/[ファイル名].ts