# 6. firebase

## firebase 利用方法

DB はサイトの URL とタイトルと画像 URL
S3 必要かな？firebase に画像登録できるのであれば、そのまま

## firebase project 作成手順

**branch:feature/firebase_init_setup**

1. firebase でプロジェクトを作成
2. ウェブアプリに Firebase を追加し key を取得
3. firestore を作成

4. について
   作成すれば完了

5. について
   ウェブアプリに Firebase を登録する。
   Firebase SDK は pass で OK
   コンソールに戻り、設定からプロジェクトのロケーションを asia-northeast1 にする

ここでターミナルに戻り以下コマンドを実行する。

```bash
$cd portfolio-web-site

$npm install -g firebase-tools

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

動作動作確認をする前に test が動作するか確認をした
`$npm run test`
test ディレクトリにあるデフォルトの NuxtLogo.spec.js が実行される。

pass(成功)しました。
コード or テストに不備があるとエラーが起きます。

このようにしてデプロイ(本番反映)前にテストを実行する事でバグを未然に防げます。ただし、テストを実行し忘れてデプロイしてしまう可能性もあるので、CI/CD を使ってデプロイの度に自動テストをする仕組みを作成します。

動作確認

`$npm run generate`
プロジェクトディレクトリ内で実行する(package.json があるところ)
・dist 配下に静的ファイルが作成される。
・この dist の中身が今回 firebase Hosting によってホスティングされる静的ファイル群

`$ firebase deploy --only hosting`
プロジェクトディレクトリ内で実行する(package.json があるところ)
実行後、hostingURL があるためスマホ、PC で確認できる。
Hosting URL: https://naohito-t-portfolio.web.app

3. について
   firebase project name
   portfolio-web-site-revo はやめた(projectID が気に入らない)

naohito-t-portfolio で作成
リージョンは以前に設定しているため firestore を作成し適当にコレクションを追加しておく。

firestore Database
asia-northeast1 (東京)

4. firebaseSDK を使う
   コンソールにログインして、
   「プロジェクトを設定」→ 「マイアプリ」 → 　「Firebase SDK snippet」
   と進み、「CDN」を選択するとコードが表示されます。
   firebaseConfig の部分だけコピーする。

plugin/firebase.js の中に作成した。

## firebase Authtication

[参考手順](https://qiita.com/Yuta_Fujiwara/items/3c57c99399891ae3ff38)

[一番参考にした](https://qiita.com/Takabun/items/e0b0c139ccf53c7bb561)

@nuxt/firebase モジュールで簡単に連携できるとのことだが大げさな気もする。
そのため普通に実装する形で対応するようにする

Firebase では認証状態をどの程度維持するかを指定することができる。

認証したのをどれで管理するかがとても重要

今回 nuxt の構成は compositionAPI で状態とロジックを切り離しているためそれで実装する。

## firebase 設計

**project 詳細 page**
/works/\_slug
work のタイトル

**project 一覧**
