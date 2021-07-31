# 4. nuxt

起動は全てyarnでしかしない。
stateの内容はpageをreloadすると消えてしまう。
layout/defaultなどで認証などを定義すれば常に参照ができる。
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

- nuxtjs axios setup

```$ yarn add @nuxtjs/axios```

```ts
modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],
```

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

あとやっていないこと
lintの設定
huskyの設定
storeなど？


