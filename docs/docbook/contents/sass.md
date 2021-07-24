# 4. sass

branch: feature/sass_setup

## sassを使うには

NuxtでSassを使うにはnode-sass、sass-loader2種類のパッケージが必要
@nuxtjs/style-resourcesは変数を使用したい場合に使う。

どうやら作成直前にversionのアップデートがあったとのこと。

以下は結構重要

今まで出来ていたことが
エラーになってしまった場合、
リリース情報を見て
サポートしているバージョンを
確認するのは大事


```$ yarn add --dev node-sass sass-loader @nuxtjs/style-resources```

nuxt.config.tsに以下を記載する。
```ts
modules: ['@nuxtjs/style-resources'],
```
