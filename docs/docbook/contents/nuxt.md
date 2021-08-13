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


あとやっていないこと
lintの設定
huskyの設定

