## webpackを使ってみる
これは、webpackを使ってみるための環境をドッカー上に作成し<br/>
以下の書籍に添ってwebpackの使い方を練習したリポジトリです。
<br />
[webpack実践入門：webpackの基礎をしっかり理解して使いこなす](https://www.amazon.co.jp/webpack-%E5%AE%9F%E8%B7%B5%E5%85%A5%E9%96%80-webpack%E3%81%AE%E5%9F%BA%E7%A4%8E%E3%82%92%E3%81%97%E3%81%A3%E3%81%8B%E3%82%8A%E7%90%86%E8%A7%A3%E3%81%97%E3%81%A6%E4%BD%BF%E3%81%84%E3%81%93%E3%81%AA%E3%81%99-soarflat-ebook/dp/B07X9H8JZZ?ie=UTF8&redirect=true&ref_=ku_mi_rw_edp)
<br />
[webpackについて](https://ics.media/entry/12140/)
<br />
<br />

### 使い方
1. git clone で自分のマシン上にコピーする。
2. CLIでディレクトリを開き、<br/>
    `$ docker-compose up -d`<br/>
    `$ docker exec -it node_lts bash`<br/>
    ※ローカルのマシンにnodeがインストールされてなければnpmはコンテナ内で行ってください。<br/>
    `$ npm install`<br/>
    ※ node_moduleはgithubにはあげない用にしてるので各自npm installで生成してください。<br/>
3. 格ディレクトリを好きなように編集する。

### npm格コマンド
ディレクトリを初期化し、package.jsonを生成<br/>
`$ npm init -y`<br/>
webpackのインストール<br/>
`$ npm install webpack webpack-cli`<br/>
ビルドの実行(詳しくはpakcage.json及びwebpack.config.js)<br/>
`$ npm run build`<br/>

### package.jsonの補足

#### devDependenciesとdependenciesの違い

- devDependencies
開発時に必要なモジュール<br/>
- dependencies
実行時に必要なモジュール<br/>

### /getting-stared-webpack
400円と600円の品物を買った時の税込み金額をhtmlのbody内に表示する。<br/>
