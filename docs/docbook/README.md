# Document

## Document enviroment version

```bash
$node -v
v14.4.0

$gitbook --version
CLI version: 2.3.2
GitBook version: 3.2.3
```

## package-lock.json と yarn.lockが共存しているときの解決方法

(参考URL)[https://zenn.dev/mo_ri_regen/articles/package-lock-yarn-lock]

## npm自体のアップデート

(参考URL)[https://qiita.com/n0bisuke/items/b2704b6ebb84f21c03c1]

## 次やることmemo
https://ics.media/entry/210120/
## Memo

コマンドラインツールは、global に add するのがお約束。

一番の参考サイト
[URL](https://qiita.com/ikkei12/items/0f0c2d95bdd3b54d6bac)

参考サイト
[URL](https://zenn.dev/koduki/articles/430ba33bb8b8f6)

参考サイト2
[URL](https://zenn.dev/ririli47/articles/f8d12ad890ca4d9c615b)

## node version固定

[URL](https://qiita.com/suin/items/994458418c737cc9c3e8)

## Concept

## 作成予定機能

### login機能

### home page

### ポートフォリオ詳細 page

### 自身を紹介する page

### コードがどれくらいやっているのかを表す円グラフページ

## firebase

DBはサイトのURLとタイトルと画像URL
S3必要かな？firebaseに画像登録できるのであれば、そのまま

## 作成手順

```bash
$node -v
v12.21.0

$npm install -g firebase-tools

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

## memo (SPA・SSR・SSG)

[URL](https://qiita.com/nishinoshake/items/f42e2f03663b00b5886d)

Nuxt.jsではSPA・SSR・SSGの中から好きなものを選んで開発ができる
初期設定ではSSRで動作するようになっている。

SPA(Single Page Application)

- メリット
  実装しやすい
  サーバの準備が楽
  SPAは、最もシンプルに実装でき、ホスティング先の選択肢が多いのが魅力です。
  ドキュメントで、NetlifyやGitHub Pagesへのデプロイ方法が紹介されていますが、単にファイルをアップすればいいだけなので、ロリポップのようなレンタルサーバーでも動きます

- デメリット
  初期表示が遅い
  SEOに不安がある
  OGをページごとに設定ができない OGってなんだっけ

SSR(Single Side Rendering)

- メリット
  SPAの欠点を解消できる

- デメリット
  実装がSPAより面倒
  サーバーの準備が面倒

  初回のリクエストをサーバーサイドでレンダリングして返すため、SPAの欠点を補うことができます。一方で、レンダリングするためのサーバーと、SSRを考慮した実装が必要になります。
  ドキュメントで、HerokuやNowへのデプロイ方法が紹介されていますが、Node.jsが動作するサーバーを用意できればなんでも大丈夫です。インフラに弱い人にはこのハードルが高い気がしますが、インフラに強い人や、好きなPaaSがある人にとっては、SSRが魅力的な選択肢になると思います。

SSG(Static Site Generation)

- メリット
  SPAの欠点を解消できる
  **サーバーの準備が楽**
  SSRよりも速い
  更新が少ないWebサイト
  ドキュメントやブログ

- デメリット
  実装が少し面倒
  用途が限られる

各ルートのHTMLをあらかじめ生成するため、SSRよりもレスポンスが速いのが魅力です。また、静的ファイルを生成するおかげで、SPAと同じようにホスティング先の選択肢が広がります。

生成時にはサーバーサイドでレンダリングすることになるので、SSRを考慮した実装が必要になるのと、SSGには向き不向きがあるので、Webサイトの要件を考えて慎重に選択する必要があります。

## doc

[URL](https://qiita.com/minato-naka/items/3b0bcf0788a2150f3171)

## README 作成手順

[参考URL](https://zenn.dev/mebiusbox/articles/703e934c78fa20)

### gitbookについて

GitBook は、Markdown形式で作成した文章を HTML形式、PDF形式、ePub形式などの電子ブックを簡単に作ることができる。
GitBook は、クラウドサービスですが、
gitbook-cli を利用して、スタンドアロンで生成する環境を構築できます。

### gitbookインストール

グローバルにgitbook-cliをインストールする
```bash
$npm install -g gitbook-cli

インストール後、version確認
$ gitbook --version
CLI version: 2.3.2
GitBook version: 3.2.3

インストール後gitinit
$gitbook init
README.md と SUMMARY.mdが作成される

$gitbook build

```

## firebase project

**branch:feature/firebase_init_setup**

1. firebaseでプロジェクトを作成
2. ウェブアプリにFirebaseを追加しkeyを取得
3. firestoreを作成

1. について
作成すれば完了

2. について
ウェブアプリにFirebaseを登録する。
Firebase SDKはpassでOK
コンソールに戻り、設定からプロジェクトのロケーションをasia-northeast1にする

ここでターミナルに戻り以下コマンドを実行する。

```bash
$cd portfolio-web-site

$node -v
v12.21.0

$exec $SHELL -1

$firebase login
Already logged in as naohito.tanaka0523@gmail.com

さっき作成したプロジェクトを元にnuxtをFirebaseアプリとして初期化する。
$firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to co
nfirm your choices.
nce
 ◯ Firestore: Configure security rules and indexes files for Firestore
 ◯ Functions: Configure a Cloud Functions directory and its files
❯◉ Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
 ◯ Hosting: Set up GitHub Action deploys
 ◯ Storage: Configure a security rules file for Cloud Storage
 ◯ Emulators: Set up local emulators for Firebase products

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: naohito-t-portfolio (naohito-t-portfolio)
i  Using project naohito-t-portfolio (naohito-t-portfolio)

=== Hosting Setup

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? No # indexが上書きされるためNo
? Set up automatic builds and deploys with GitHub? Yes
✔  Wrote dist/404.html
✔  Wrote dist/index.html

i  Detected a .git folder at /Users/tanakanaohitoshi/work/product/portfolio-web-site
i  Authorizing with GitHub to upload your service account to a GitHub repositorys secrets store.

✔  Success! Logged into GitHub as naohito-T

? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) naohito-T/portfo
lio-web-site

✔  Created service account github-action-382861390 with Firebase Hosting admin permissions.
✔  Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_NAOHITO_T_PORTFOLIO.
i  You can manage your secrets at https://github.com/naohito-T/portfolio-web-site/settings/secrets.

? Set up the workflow to run a build script before every deploy? Yes
? What script should be run before every deploy? npm ci && npm run build

✔  Created workflow file /Users/tanakanaohitoshi/work/product/portfolio-web-site/.github/workflows/firebase-hosting-pull-request.yml
? Set up automatic deployment to your sites live channel when a PR is merged? Yes
? What is the name of the GitHub branch associated with your sites live channel? main

✔  Created workflow file /Users/tanakanaohitoshi/work/product/portfolio-web-site/.github/workflows/firebase-hosting-merge.yml

i  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:
https://github.com/settings/connections/applications/89cf50f02ac6aaed3484
i  Action required: Push any new workflow file(s) to your repo

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
```

動作動作確認をする前にtestが動作するか確認をした
```$npm run test```
testディレクトリにあるデフォルトのNuxtLogo.spec.jsが実行される。

pass(成功)しました。
コードorテストに不備があるとエラーが起きます。

このようにしてデプロイ(本番反映)前にテストを実行する事でバグを未然に防げます。ただし、テストを実行し忘れてデプロイしてしまう可能性もあるので、CI/CDを使ってデプロイの度に自動テストをする仕組みを作成します。

動作確認

```$npm run generate```
・dist配下に静的ファイルが作成される。
・このdistの中身が今回firebase Hostingによってホスティングされる静的ファイル群

```$ firebase deploy --only hosting```
実行後、hostingURLがあるためスマホ、PCで確認できる。
Hosting URL: https://naohito-t-portfolio.web.app


3. について
firebase project name
portfolio-web-site-revoはやめた(projectIDが気に入らない)

naohito-t-portfolioで作成
リージョンは以前に設定しているためfirestoreを作成し適当にコレクションを追加しておく。

firestore Database
asia-northeast1 (東京)

4. firebaseSDKを使う
コンソールにログインして、
「プロジェクトを設定」→ 「マイアプリ」 →　「Firebase SDK snippet」
と進み、「CDN」を選択するとコードが表示されます。
firebaseConfigの部分だけコピーする。

plugin/firebase.jsの中に作成した。

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

## nuxt userAgent導入

UA(User Agent: UA)とは
ネット利用者が使用しているOS・ブラウザのことを指す
一般的なインターネットブラウザを使い、HTTPに基づきサイトなどにアクセスした際にはユーザエージェントに関する各種情報が相手側に通知される仕組みとなっている。
サイト側はユーザーエージェントを見ることでアクセスしてきたユーザがどういったOSやブラウザを使っているかを把握できる。
そのためアクセス解析に利用されることが多い。
```$ yarn add nuxt-user-agent```

## nuxtでsassを使う準備
会社でもインストールしていた。

```$ yarn add --dev node-sass sass-loader @nuxtjs/style-resources```

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

### nuxtでのcomposition API 鉄則ルール
@nuxtjs/composition-api では、従来の asyncData, fetch() そして head()に変わる API が用意されています

useAsync - Nuxt Composition API

useFetch - Nuxt Composition API

useMeta - Nuxt Composition API





ここまでで最低限の準備が完了

## nuxt typescript-runtime setup RUNTIME

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

## nuxt/typescript-buildnuxt buildでTSを扱うためのものが@nuxt/typescript-buildです。
@nuxt/typescriptは@nuxt/typescript-buildに含まれるようになったので直接の依存は不要になります。
@nuxt/typescriptがRuntimeとに分離されて使いやすくなった感じですね

```yarn add -D @nuxt/typescript-build```
