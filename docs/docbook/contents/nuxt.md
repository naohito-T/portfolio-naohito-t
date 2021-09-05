# 4. nuxt

起動は全てyarnでしかしない。
stateの内容はpageをreloadすると消えてしまう。
layout/defaultなどで認証などを定義すれば常に参照ができる。

[設計参考](https://logmi.jp/tech/articles/322003)
[設計参考2compositionapi](https://zenn.dev/koudaiishigame/articles/810ce2d0ee8ade)


## create nuxt-app 作成手順

```bash

version確認
$node -v
v12.21.0

$yarn create nuxt-app portfolio-web-site

以下プロジェクト作成時の選択
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

動確
$ yarn test
$ yarn dev
$ yarn generate

$ rm -rf .git
nuxt createでのデフォルトリポジトリは削除する

全てok

```

## nuxt typescript化

branch: feature/nuxt_composition_api_setup

1. まずはnuxt.config.jsをts化にする。ここでVuetyfiがerrorを吐いていた。npm i --save-dev @types/vuetify

2. TypeScriptで.vueファイルを読み込めるように設定
(参考URL)[https://ikkyu.hateblo.jp/entry/2019/08/14/233538]

```bash

$mkdir @types

```

次にtypesディレクトリの型ファイルを読み込めるようにするため、tsconfig.jsonを変更します。
すでにtypesで指定されていますが、新しいパッケージの型を入れたらその都度typesに追加する必要があるため、削除します。
変わりにtypeRootsを使用します。

3. src配下に全て配置する。[参考URL](https://leotakeishi.com/blog/create-nuxt-typescript-environment/)


4. vuetify error
  nuxt.config.tsにするとvuetifyがerrorになっていた。そのためtsconfig.jsonのtypesに追加をすると解消した。
  `tsconfig.json`の`types: []`に`"vuetify"`を追加すれば解決できた。
4. エディタのエラーを解消する。

## nuxt スマホとPCの区切り運用
window幅を取得し、デバイス判断をしていくのがいい
userAgentだとかなりの数となる。

## nuxt composition API

[参考URL](https://task-kawahara.hatenablog.com/entry/2020/12/28/124445)

以下コマンドでcompositionAPIを導入する。
```$ yarn add @nuxtjs/composition-api```

導入後、nuxt.config.tsに以下を追記

```ts
buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module'
  ],
```

- nuxt composition APIとは
@vue/composition-apiと比べてNuxt特有の機能(UseAsync)などをサポートしているのが特徴。
@vue/composition-apiをラップしているためcomposition-apiの機能はもちろんNuxt特有の機能が揃っている。

router, app, store に簡単にアクセスできるのがよい(useContextを使用して)

@vue/composition-api では呼び出し時にcontextを引数として渡す
@nuxtjs/composition-api では呼び出された場所のcontextをuseContextで取得できる

contextをリレーする必要がなくなります｡

[参考URL](https://zenn.dev/hogeihogemi/articles/94c0254372defd)

### nuxtでのcomposition API 鉄則ルール

@nuxtjs/composition-api では、従来の asyncData, fetch() そして head()に変わる API が用意されています

useAsync - Nuxt Composition API

useFetch - Nuxt Composition API

useMeta - Nuxt Composition API


## nuxt typescript project 強化

branch: feature/nuxt_typescript_setup

- typescript-runtime setup RUNTIME

RUNTIME中でもTSを実行させる。

[参考URL](https://qiita.com/iwata@github/items/a94c6d116a3e84911628)
```$ yarn add @nuxt/typescript-runtime```

NuxtのTS周りのNPMがいくつかに分解された。
そのうち@nuxt/typescript-runtimeはNode環境でTSを処理するためのもの
具体的にはnuxt.configやsererMiddlewaresでTSを使いたいときに必要になる。
ちなみに@nuxt/typescript-runtimeはProduction環境(NODE_ENV=production)でも必要になるので、dependenciesに追加する必要があります。
(nuxt-ts startで使用するので)

また一連のnuxtコマンドをnuxt-tsにしてあげる必要がある。

```json
-    "dev": "nuxt",
-    "build": "nuxt build",
-    "start": "nuxt start",
-    "generate": "nuxt generate",

+    "dev": "nuxt-ts",
+    "build": "nuxt-ts build",
+    "start": "nuxt-ts start",
+    "generate": "nuxt-ts generate",
```

- nuxt/typescript-buildnuxt buildでTSを扱うためのものが@nuxt/typescript-buildです。
@nuxt/typescriptは@nuxt/typescript-buildに含まれるようになったので直接の依存は不要になります。
@nuxt/typescriptがRuntimeとに分離されて使いやすくなった感じですね

```yarn add -D @nuxt/typescript-build```


- nuxt userAgent導入

UA(User Agent: UA)とは
ネット利用者が使用しているOS・ブラウザのことを指す
一般的なインターネットブラウザを使い、HTTPに基づきサイトなどにアクセスした際にはユーザエージェントに関する各種情報が相手側に通知される仕組みとなっている。
サイト側はユーザーエージェントを見ることでアクセスしてきたユーザがどういったOSやブラウザを使っているかを把握できる。
そのためアクセス解析に利用されることが多い。
```$ yarn add nuxt-user-agent```

- nuxtでsassを使う準備
会社でもインストールしていた。

[作成手順](./sass.md)

- nuxtjs dayjs setup

まだやらない

- バンドルファイルの分析

Webpack Bundle Analyzerを利用すると、バンドルサイズを可視化できます。可視化することで「容量の大きいモジュールの把握」「複数ページで共通モジュールを保持してないかの確認」といった分析がしやすくなります。

package.jsonのscriptに以下を追加

```json
"analyze": "nuxt-ts build --analyze",
```

使用例
1.Webpack Bundle Analyzerを使って、現状のファイルサイズを把握。
2.その中でどのファイルがネックになっているか調査する。
3.リファクタリングする。 ※今回は一部のみ

- nuxtjs markdown 対応

[参考URL](https://dev.classmethod.jp/articles/nuxtjs-markdown-it/)

## nuxt storeについて

>Nuxt.jsでVuexを通常利用する場合には、storeディレクトリにモジュールと対応するファイルを設置します。例えば、myModule.jsというファイルをstoreディレクトリに設置すれば、myModuleといモジュールで自動的に作成され、コンポーネントからアクセスすることができます。
>今回はその中でも、Nuxt.js公式で推奨されているvuex-module-decoratorsを使用します。

- nuxtでのグローバル管理について考える
色々考えたが、provideとinjectで管理をするのは特定のロジックなどがよいと思う。
loading画面や、ログイン管理などは必然的に全てで管理をするため、storeがよいと思う。

- store導入
[参考URL](https://qiita.com/azukiazusa/items/a50b1ffe05d9937a4db0)
`yarn add -D vuex-module-decorators`


## NuxtでDIっぽいことをする

`js app.$store.~~~`
みたいにコンテキストに自作関数を入れることができる。

- グローバルに関数を使う理由

>Vue.jsでの処理の共通化といったら、Mixinが有名です。しかし、asyncData関数の中では参照することができなっかたり、TSでデコレーターを使用している場合はVueインスタンスでMixinsクラスを継承する必要があったりと、少し不便なところもあります。Nuxtのpluginを実装することで、DIっぽいことをしてどこでも関数が使えることが分かったので、その方法を紹介していきます。（Nuxtで明示的にDIの機構が用意されているわけではないのでDIっぽいこと、としています。）

この手順によりプラグインの作成手順もかねてくる。

1. tsconfig編集

以下の部分を追記しないとsrc/@typesを読み込みにいかなかった。
Nuxtはデフォルトで@typesを見に行くようだが、src配下に全てのディレクトリを移動しているためもしかしたら見に行かないのかも

```json
    // /src/@typesを読みに行く
    "typeRoots": [
      "./src/@types"
    ],
```

2. storeディレクトリ編集

以下のディレクトリ構成にする。

store -- module
      |
      -- type

3. @typesにstore.d.tsを作成

[型定義作成についての参考](https://medium.com/@ryutamaki/npm-module-%E3%81%AB-typescript-%E3%81%AE%E5%9E%8B%E5%AE%9A%E7%BE%A9%E3%81%8C%E3%81%AA%E3%81%84%E6%99%82%E3%81%AB-%E3%81%A8%E3%82%8A%E3%81%82%E3%81%88%E3%81%9A%E3%83%93%E3%83%AB%E3%83%89%E3%81%8C%E9%80%9A%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B-fcc090804b21)

`tsNuxtAppOptions`にすることで、useContext()のappの後に続くところで自作モジュールを作成できる。

```ts
/**
 * @desc プラグインで使用するための型拡張
 * プラグインは Vue のグローバル/インスタンスプロパティやコンポーネントオプションを追加することがあります。
 * このような場合、TypeScript でそのプラグインを使用したコードをコンパイルするためには型定義が必要になります。
 * 幸い、TypeScript にはモジュール拡張 (Module Augmentation) と呼ばれる、すでに存在する型を拡張する機能があります。
 * Vueリファレンス, スケールアップ参照
 */
import '@nuxt/types';
import { Stores } from '@/store/module';

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $stores: Stores;
  }
}
```

> tsconfig には typeRoots というプロパティがあり、これは型定義を探し始める root のディレクトリを決めるオプションです。デフォルトが @types になっているので、 自分の typescriptプロジェクト内に @types を追加することで自動的に .d.ts を探しにいってくれます
## nuxt loading画面

[LoadingのGIF画像](https://icons8.com/preloaders/)


## nuxtjs axios setup

[参考URL](https://qiita.com/shiro_kzy/items/cb64e4ad8f4de0ba97a0)

Nuxt.jsでaxiosを使う際に用途によって使い方が異なる。

- vueファイルで使う
- typescriptで使う
- asyncDataで使う

1. nuxt axios 導入
```$ yarn add @nuxtjs/axios```

2. nuxt.config.tsに以下を記載する。

```ts
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
  ],
```

3. TSを使用している場合はtsconfig.jsonにも以下を記載

```json
"types": [
      "@nuxt/types",
      "@types/node",
      "@nuxtjs/axios",
    ]
```

ここからtsファイルで使用するためにaxiosの設定ファイルを作成しPluginで読み込んで汎用に使えるようにする。
そしてここからはユメグラをみていく

4. libフォルダ作成
lib/api/request/api.tsまで作成する

5. pluginとして全てのvueファイルで使えるようにする。

pluginsディレクトリで作成する。api.tsを作成しinjectをする

6. nuxt.config.tsでpluginの内容を明記する

```ts
plugins: [{ src: '@/plugins/stores' }, { src: '@/plugins/api' }],

```

7. ts コンパイラに型定義を伝える。
@nuxt/typesのもともとのコンテキストのオプションを上書きしているイメージ

```ts
import '@nuxt/types';
import { API } from '@/lib/api';

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: API;
  }
}
```

以上

## error page作成

nuxtではlayouts/error.vueを作成するとエラーが発生したときに自動でそのページが表示されるようになる

>※エラーページの自動表示は、クライアントサイドでのレンダリング中のみになります。
>SSRモードのサーバーサイドレンダリング中に発生したエラーについては自動表示されないので注意が必要です。
>エラーページはページコンポーネントにエラーが発生した時に表示される（サーバーサイドレンダリング中には発生しない）

1. layouts/error.vueを作成
デフォルトだと、クライアント側レンダリングエラーは遷移をしなかった。

2. 遷移動作確認
error.vueを総入れ替えすると移動した。

## eslint prettier stylelint 設定

[nuxt typescript eslint prettier](https://inokawablog.org/vue-js/nuxt-typescript-stylelint-eslint-prettier/)
[stylelint設定](https://qiita.com/y-w/items/bd7f11013fe34b69f0df)
[こちらのstylelint設定がよい](https://toragramming.com/web/nuxtjs/nuxt-stylelint-prettier-vscode-format-scss-on-save/)

1. npm scriptが動くか確認(nuxt-createで作成されたデフォルトの状態のやつ)
`$ yarn lint:js`
動いた。errorを検知してくれる状態。vscodeはerrorを検知してくれていない状態だった。

2. stylelint 設定

※注意
かなりめんどくさい。今の設定を見れば自ずとわかってくる。

```sh
$ yarn add -D node-sass sass-loader stylelint @nuxtjs/stylelint-module stylelint-config-standard stylelint-config-recess-order stylelint-scss stylelint-config-recommended-scss stylelint-prettier stylelint-config-prettier
```

cssプロパティの並び順はstylelint-config-recess-orderに準拠する。

- nuxt.config.tsのbuildModulesに書き込む

```ts
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],
```

- stylelint.config.jsを作成
会社と参考記事を参考

`touch stylelint.config.js`

- stylelint vscode 連携

[参考URL](https://qiita.com/y-w/items/bd7f11013fe34b69f0df#7-%E8%A3%9C%E8%B6%B3-vs-code%E3%81%AE%E3%81%AE%E8%A8%AD%E5%AE%9A---stylelint%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD)

1. stylelint 拡張機能をinstall(vscode)

2. vscode用のproject settingをする

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
    'stylelint-prettier/recommended'
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
}
```

1. eslint設定

`$ yarn add -D eslint-config-airbnb-base babel-plugin-module-resolver babel-eslint eslint-config-prettier eslint-import-resolver-alias eslint-plugin-import eslint-import-resolver-babel-module eslint-plugin-nuxt eslint-plugin-prettier`

install moduleの説明

- eslint-config-airbnb-base
Airbnbのベースの.eslintrcを提供しています。

- babel-plugin-module-resolver
プロジェクトのrequire / importパスを簡略化できます

- babel-eslint
Babelのコードをlintします

- eslint-config-prettier
不要またはPrettierと競合する可能性のあるすべてのルールをオフにします。

- eslint-import-resolver-alias
Node.jsモジュール解決、モジュールエイリアス/マッピング、カスタムファイル拡張子をサポートしています

- eslint-plugin-import
インポート/エクスポート構文のリンティングをサポートしています

- eslint-import-resolver-babel-module
eslint-plugin-importのためのリゾルバ

- eslint-plugin-nuxt
Nuxt.js用のESLintプラグイン

- eslint-plugin-prettier
PrettierをESLintルールとして実行し、差異を個々のESLint問題として吐き出す。

4. package.json npm run script編集

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
tsに変更後も動いた。errowだけを吐き出してくれている状態
`$ yarn lint:style`
これがstylelintがないと言われerrorとなる。globalにインストールしないといけない。node_module内にあるstylelintは使えないのか？
→npm runはローカルプロジェクトのnode_moduleを実行する。
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

[参考URL](https://higemura.com/blog/programming/dark-mode-css-variables-01)
[コーディング参考](https://qiita.com/kodama321/items/f6e894915146d0cc69c5)

- 要件

1. クライアントのモードによって値を取得しないといけない。
`jswindow.matchMedia('(prefers-color-scheme: dark)').matches`

2. トグルボタンを設置しないといけない。
`html<button @onclick>`で対応。buttonの状態はクライアントのモード状態で変わっていなければいけない。

3. buttonを押下したら切り替えができる。

## footerのplease message

アニメーションが必要になる
[参考URL](https://yuyauver98.me/coding-btn-simple02/)

## top scroll button

[参考URL](https://qiita.com/TK-C/items/42b25ff4ec56528ad870)

- 要件

1. 最初は表示しない
→scroll値で出すか
2. アニメーションで表示される
→transitionでやる
3. アニメーションで戻る
→nuxt scrollのプロパティ値でいけるか？
4. 全てのテンプレートで使用ができる
→汎用性を高める
5. buttonではなく文字で出現させる。

## nuxt SVG導入

1. nuxt-svg-loader を インストール
`$ yarn add -D nuxt-svg-loader`

2. nuxt.config.tsにmoduleを追記

3. assets/内にSVGを設置し読み込むだけ

## nuxt font導入

Objective Font Family にすることにした。
[Objective Font Family URL](https://www.dafontfree.io/objective-font-family/)

1. fontをきめてローカルにインストールする
2. プロジェクトフォルダに配置
3. nuxtの読み込み方法
[リファレンスURL](https://ja.nuxtjs.org/docs/2.x/directory-structure/assets)
4. @font-faceで読み込み _variables.scssで読み込み

- @font-faceとは
> CSSの @font-face @-規則は、テキストを表示するための独自フォントを指定します。フォントはリモートサーバーまたはユーザー自身のコンピューターにローカルにインストールされたフォントのどちらかから読み込むことができます。 local() 関数が与えられると、ユーザーのコンピューターで探すフォント名を指定し、ユーザーエージェントがそれを見つけることができれば、そのローカルフォントを使用します。そうでなければ、 url() 関数を使用して指定されたフォントリソースをダウンロードして使用します。

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

## propsをbackground-imageにわたす

[参考URL](https://qiita.com/mczkzk/items/a2fd40b5a54d81766ab2)

## 文字のスクロール

[参考URL](https://webparts.cman.jp/string/scroll/)

## 横幅のブレイクポイントを決めておく

BootStrapを参考にしている
> Bootstrap(Ver.3)では、768px未満をスマートフォン、992px未満をタブレット、1,200px未満を中型デスクトップ、1,200px以上を大型デスクトップに分類してブレイクポイントが設けられています。

## 横スクロール実装

JSでの実装が必要。完成した。

## about page作成

markdownで挿入できる形にはしたためそれを変更する
コピーしたときの色を変更
## work page作成

カルーセルスライダーでpageを敷き詰めたい
hoverすると画像が暗くなり、文字が浮き上がるようにする
リンク先はその仕事先
Twitter、Instagramなど配置してもいいかも

## ここでテスト実行環境作成

[Nuxt.jsでjestとcypressでテストをする](https://blog.rhyztech.net/nuxtjs_typescript_jest_cypress/)

jestのtestを理解する

jestとCypress(サイプレス)を導入

- Cypress(サイプレス)とは
>長い間、Web UI の自動テストツールといえば Selenium だったのですが、最近は Selenium 以外にも優れたツールが増えてきています。大部分が有料ツールなので、なかなか紹介しづらいのですが、「Cypress(サイプレス)」はオープンソースで無料で使えるだけではなく、かなり使い勝手のよく仕上がっている

cypressをインストール
`$ yarn add --dev cypress @types/cypress eslint-plugin-cypress`

cypress初期設定 ※アプリが立ち上げある
`npx cypress open`

cypress.jsonを編集しアクセスするURLを明示する

```json
{
  "baseUrl": "http://localhost:3000"
}
```

jestとcypressの型情報がほしいためtsconfig.jsonのincludeに型情報を追加する。

サーバを立ち上げる
`$ yarn dev`

cypressを走らせる
` $ npx cypress run`



## animation 導入

animation 導入にはgsapが海外では一番作成されているとのこと。


あとやっていないこと
huskyの設定(勝手にかける設定)

コピペの色を変える。
動画ものっける。
work pageにのっけるもの
Gyfu.について
Gyfu.リリースpageつくるか謎
美容師の作品撮りを乗っけていくか
自身でつくったアプリ
リリースページを作ってもいいかも
pdfにはgitbookで作った経歴書
