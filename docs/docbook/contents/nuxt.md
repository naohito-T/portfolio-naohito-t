# 4. nuxt

## create nuxt-app エビデンス

```sh
# version確認
$node -v
v12.21.0
$yarn create nuxt-app portfolio-web-site
# 以下プロジェクト作成時の選択
create-nuxt-app v3.7.1
✨  Generating Nuxt.js project in portfolio-web-site
? Project name: portfolio-web-site
? Programming language: TypeScript
? Package manager: Yarn
? UI framework: None
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Linting tools: ESLint, Prettier
? Testing framework: Jest
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Continuous integration: GitHub Actions (GitHub only)
? What is your GitHub username? naohito-t
? Version control system: Git
```

## 動作確認

$ yarn test
$ yarn dev
$ yarn generate

$ rm -rf .git
nuxt create でのデフォルトリポジトリは削除する

## nuxt loading 画面

[Loading の GIF 画像](https://icons8.com/preloaders/)

## error page 作成

nuxt では layouts/error.vue を作成するとエラーが発生したときに自動でそのページが表示されるようになる

> ※エラーページの自動表示は、クライアントサイドでのレンダリング中のみになります。
> SSR モードのサーバーサイドレンダリング中に発生したエラーについては自動表示されないので注意が必要です。
> エラーページはページコンポーネントにエラーが発生した時に表示される（サーバーサイドレンダリング中には発生しない）

1. layouts/error.vue を作成
   デフォルトだと、クライアント側レンダリングエラーは遷移をしなかった。

2. 遷移動作確認
   error.vue を総入れ替えすると移動した。

3. npm script が動くか確認(nuxt-create で作成されたデフォルトの状態のやつ)
   `$ yarn lint:js`
   動いた。error を検知してくれる状態。vscode は error を検知してくれていない状態だった。

4. stylelint 設定

※注意
かなりめんどくさい。今の設定を見れば自ずとわかってくる。

```sh
$ yarn add -D node-sass sass-loader stylelint @nuxtjs/stylelint-module stylelint-config-standard stylelint-config-recess-order stylelint-scss stylelint-config-recommended-scss stylelint-prettier stylelint-config-prettier
```

css プロパティの並び順は stylelint-config-recess-order に準拠する。

- nuxt.config.ts の buildModules に書き込む

```ts
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],
```

- stylelint.config.js を作成
  会社と参考記事を参考

`touch stylelint.config.js`

- stylelint vscode 連携

[参考 URL](https://qiita.com/y-w/items/bd7f11013fe34b69f0df#7-%E8%A3%9C%E8%B6%B3-vs-code%E3%81%AE%E3%81%AE%E8%A8%AD%E5%AE%9A---stylelint%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD)

1. stylelint 拡張機能を install(vscode)

2. vscode 用の project setting をする

```json
{
  "[scss]": {
    "editor.formatOnSave": false
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true // stylelintの拡張機能を使うと、ファイルを保存する際に自動でstylelint --fixを実行できます。以下のようにsettings.jsonに書きます。
  },
  "css.validate": false, // vscode上のCSSのデフォルトのLintをオフにする。stylelintと重複して実行されないようにする
  "scss.validate": false
}
```

```js
// https://toragramming.com/programming/nuxt-js/nuxt-stylelint-prettier-vscode-format-scss-on-save/
module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  ignoreFiles: ['**/node_modules/**'],
  extends: [
    // Google や Airbnb のスタイルガイドなどが含まれた一般的なスタイル規則
    'stylelint-config-standard',
    // SCSS 用ルールセット
    'stylelint-config-recommended-scss',
    // stylelint-config-で適応したルールとprettierが競合するルールを後ろからオフにする
    // そのためstylelint-prettier/recommendedは必ず最後に記述する
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'declaration-colon-newline-after': null,
    'declaration-block-trailing-semicolon': null,
    'value-list-comma-newline-after': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'order/properties-alphabetical-order': true,
  },
};
```

1. eslint 設定

`$ yarn add -D eslint-config-airbnb-base babel-plugin-module-resolver babel-eslint eslint-config-prettier eslint-import-resolver-alias eslint-plugin-import eslint-import-resolver-babel-module eslint-plugin-nuxt eslint-plugin-prettier`

install module の説明

- eslint-config-airbnb-base
  Airbnb のベースの.eslintrc を提供しています。

- babel-plugin-module-resolver
  プロジェクトの require / import パスを簡略化できます

- babel-eslint
  Babel のコードを lint します

- eslint-config-prettier
  不要または Prettier と競合する可能性のあるすべてのルールをオフにします。

- eslint-import-resolver-alias
  Node.js モジュール解決、モジュールエイリアス/マッピング、カスタムファイル拡張子をサポートしています

- eslint-plugin-import
  インポート/エクスポート構文のリンティングをサポートしています

- eslint-import-resolver-babel-module
  eslint-plugin-import のためのリゾルバ

- eslint-plugin-nuxt
  Nuxt.js 用の ESLint プラグイン

- eslint-plugin-prettier
  Prettier を ESLint ルールとして実行し、差異を個々の ESLint 問題として吐き出す。

4. package.json npm run script 編集

```json
"lint:js": "eslint --ext \".js,.vue\" --ignore-path .gitignore .",
↓
"lint:js": "eslint --ext \".ts,.js,.vue\" --ignore-path .gitignore .",

// 完成形
"lint:js": "eslint --ext \".ts,.js,.vue\" --ignore-path .gitignore .",
"lint:style": "stylelint **/*.{vue,css} --fix --ignore-path .gitignore",
"lint": "npm run lint:js && npm run lint:style",
```

- 動作確認

`$ yarn lint:js`
ts に変更後も動いた。errow だけを吐き出してくれている状態
`$ yarn lint:style`
これが stylelint がないと言われ error となる。global にインストールしないといけない。node_module 内にある stylelint は使えないのか？
→npm run はローカルプロジェクトの node_module を実行する。
`$ yarn add -D stylelint`
上記をインストール後、実行できるようになった。

```sh
$ node -v
v12.21.0
# これでも動かない
$ npm install -g stylelint
# 以下をインストールして動いた
$ yarn add -D stylelint
$ yarn lint:style
# errorを吐き出してくれた!
```

## ダークモード対応

[参考 URL](https://higemura.com/blog/programming/dark-mode-css-variables-01)
[コーディング参考](https://qiita.com/kodama321/items/f6e894915146d0cc69c5)

- 要件

1. クライアントのモードによって値を取得しないといけない。
   `jswindow.matchMedia('(prefers-color-scheme: dark)').matches`

2. トグルボタンを設置しないといけない。
   `html<button @onclick>`で対応。button の状態はクライアントのモード状態で変わっていなければいけない。

3. button を押下したら切り替えができる。

## footer の please message

アニメーションが必要になる
[参考 URL](https://yuyauver98.me/coding-btn-simple02/)

## top scroll button

[参考 URL](https://qiita.com/TK-C/items/42b25ff4ec56528ad870)

- 要件

1. 最初は表示しない
   →scroll 値で出すか
2. アニメーションで表示される
   →transition でやる
3. アニメーションで戻る
   →nuxt scroll のプロパティ値でいけるか？
4. 全てのテンプレートで使用ができる
   → 汎用性を高める
5. button ではなく文字で出現させる。

## nuxt SVG 導入

1. nuxt-svg-loader を インストール
   `$ yarn add -D nuxt-svg-loader`

2. nuxt.config.ts に module を追記

3. assets/内に SVG を設置し読み込むだけ

## nuxt font 導入

Objective Font Family にすることにした。
[Objective Font Family URL](https://www.dafontfree.io/objective-font-family/)

1. font をきめてローカルにインストールする
2. プロジェクトフォルダに配置
3. nuxt の読み込み方法
   [リファレンス URL](https://ja.nuxtjs.org/docs/2.x/directory-structure/assets)
4. @font-face で読み込み \_variables.scss で読み込み

- @font-face とは
  > CSS の @font-face @-規則は、テキストを表示するための独自フォントを指定します。フォントはリモートサーバーまたはユーザー自身のコンピューターにローカルにインストールされたフォントのどちらかから読み込むことができます。 local() 関数が与えられると、ユーザーのコンピューターで探すフォント名を指定し、ユーザーエージェントがそれを見つけることができれば、そのローカルフォントを使用します。そうでなければ、 url() 関数を使用して指定されたフォントリソースをダウンロードして使用します。

これでいけた。

```scss
@font-face {
  font-family: 'Objective-bold';
  font-style: normal;
  font-weight: 400;
  src: url('~assets/fonts/Objective_Woff2/Objective-Bold.woff2') format('woff2');
}

/* font-familiy */
$fontFa: 'Objective-bold', sans-serif;
```

## props を background-image にわたす

[参考 URL](https://qiita.com/mczkzk/items/a2fd40b5a54d81766ab2)

## 文字のスクロール

[参考 URL](https://webparts.cman.jp/string/scroll/)

## 横幅のブレイクポイントを決めておく

BootStrap を参考にしている

> Bootstrap(Ver.3)では、768px 未満をスマートフォン、992px 未満をタブレット、1,200px 未満を中型デスクトップ、1,200px 以上を大型デスクトップに分類してブレイクポイントが設けられています。

## 横スクロール実装

JS での実装が必要。完成した。

## about page 作成

markdown で挿入できる形にはしたためそれを変更する
コピーしたときの色を変更

## work page 作成

カルーセルスライダーで page を敷き詰めたい
hover すると画像が暗くなり、文字が浮き上がるようにする
リンク先はその仕事先
Twitter、Instagram など配置してもいいかも

## Login page 作成

とりあえず管理者のみで実装する。
Login 項目

- mail
- pass
  or
  authentication google
  firebase で実装する

デザイン
focus の色を変える

## page にスクロールするものを作成する

要件
position: sticky でやりたい。position: fixed じゃない
JS は使用しない。

TW や instagram をすべて追従させる
[CSS だけで実現する](https://www.miso.blog/css-position-sticky/)

## ここでテスト実行環境作成

[Nuxt.js で jest と cypress でテストをする](https://blog.rhyztech.net/nuxtjs_typescript_jest_cypress/)
[cypress 専用の tsconfig.json を作成(ルートの tsconfig.json と分ける)](https://dev.appswingby.com/e2e%E3%83%86%E3%82%B9%E3%83%88/nuxtcypresse2egitlabci/)

jest の test を理解する

jest と Cypress(サイプレス)を導入

- Cypress(サイプレス)とは
  > 長い間、Web UI の自動テストツールといえば Selenium だったのですが、最近は Selenium 以外にも優れたツールが増えてきています。大部分が有料ツールなので、なかなか紹介しづらいのですが、「Cypress(サイプレス)」はオープンソースで無料で使えるだけではなく、かなり使い勝手のよく仕上がっている

cypress をインストール
`$ yarn add --dev cypress @types/cypress eslint-plugin-cypress`

cypress 初期設定 ※アプリが立ち上げある
`npx cypress open`

cypress.json を編集しアクセスする URL を明示する

```json
{
  "baseUrl": "http://localhost:3000"
}
```

jest と cypress の型情報がほしいため tsconfig.json の include に型情報を追加する。

サーバを立ち上げる
`$ yarn dev`

cypress を走らせる
` $ npx cypress run`

cypress と jest の共存
[URL](https://dev.appswingby.com/e2e%E3%83%86%E3%82%B9%E3%83%88/nuxtcypresse2egitlabci/)

## animation 導入

animation 導入には gsap が海外では一番作成されているとのこと。

あとやっていないこと
husky の設定(勝手にかける設定)
Sentry の導入
コピペの色を変える。
動画ものっける。
work page にのっけるもの
Gyfu.について
Gyfu.リリース page つくるか謎
美容師の作品撮りを乗っけていくか
自身でつくったアプリ
リリースページを作ってもいいかも
pdf には gitbook で作った経歴書を乗っける(サイトのはじっこに設定)
news page 作成するかな？

## vue-slick-carouse

types はない

[参考 URL](https://github.com/gs-shop/vue-slick-carousel/blob/master/docs/API.md#props)
