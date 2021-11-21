# STORE

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Vuex Store files.
Vuex Store option is implemented in the Nuxt.js framework.

Creating a file in this directory automatically activates the option in the framework.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/vuex-store).

## 参考URL

[参考URL](https://qiita.com/azukiazusa/items/a50b1ffe05d9937a4db0)

## Tips

- VuexのモジュールからはNuxtアプリケーションインスタンスにアクセスできないためaxiosを使用したい場合はひと手間必要。

- mutations
mutationsには本来外部から直接アクセスしても構わないですが、非同期の有無にかかわらず、actions経由での更新に統一するというルールにしたがってアクセス修飾子はprivateとしています。

- action
```@Action { rawError: true }```を忘れると正しいエラーが得られない
```@Action { rawError: true }```を指定しないとデフォルトで全てのエラーはライブラリ内部で定義されている固定文言がthrowされる。
