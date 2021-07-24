# 3. env

作成ブランチ
branch: feature/env_crossenv_setup

envの設定を参考
[参考URL](https://zenn.dev/captain_blue/articles/nuxt-switch-env)

envについて詳しく述べている
[参考URL](https://www.tam-tam.co.jp/tipsnote/program/post17589.html)

## 環境変数とenvとは

環境変数とはOSやアプリケーション開発環境などの実行環境が持っている、自身の状態を表す変数
envとは環境変数を参照したり編集する仕組みのこと。環境変数を操作するLinuxのenvコマンドからきている
GulpやwebpackはNode.jsで動いている。この実行環境の環境変数はprocess.env経由で参照するのが一般的
コマンドを実行して環境変数を設定してもいいのだが、フロントエンドの開発環境ならdotenvとcross-envを使うのが一般的

## dotenvとは

開発環境のルートに環境変数を設定した.envファイルを作成すると、process.env経由で参照してくれるパッケージ
もともとはRuby初のOSS

- 環境変数設定ルール
#から始める行はコメントになります
KEY1=VALUE1は{KEY1: 'VALUE1'}として解釈されます
KEY1=は{KEY1: ''}として解釈されます
空行はスキップされます

- 導入

```sh
$ yarn add @nuxtjs/dotenv
```

envファイルを作成する(ディレクトリなどを配置)

nuxt.config.jsに設定を追加

```ts
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    ['@nuxtjs/dotenv', { filename: `.env_${process.env.NODE_ENV}` }], // ここを追加
  ],

  env: {
    // これを設定しないとNuxtでprocess.env.NODE_ENVを取得したときにデフォルトの値になってしまう。
    NODE_ENV: process.env.NODE_ENV ?? 'hh',
  },
```

## cross-envとは

WindowsでNODE_ENV=productionのように環境変数を設定すると、コマンドプロンプトが停止してしまう。
cross-envはそういったプラットフォームの差異を吸収してくれるパッケージ


- cross-envの導入
```$yarn add cross-env```

- package.json npm run編集

動作確認
index.vue内でmountedなどを使用して動作確認をする。

```ts
    onMounted(() => {
      console.log(process.env.HOGE ?? 'he')
    })
```

読み込めていたら終了

## 結論

dotenvなどはどうしても読み込めない。
そのためenv.dev.jsとして採用
採用し読み込みができた。

適用できた設定
[参考URL](https://designsupply-web.com/media/knowledgeside/6184/)
