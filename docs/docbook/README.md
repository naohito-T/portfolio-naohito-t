# Document

## Document enviroment version

```bash
$node -v
v14.4.0

$gitbook --version
CLI version: 2.3.2
GitBook version: 3.2.3
```

## project 設計

[参考URL](https://task-kawahara.hatenablog.com/entry/2020/12/28/181929)

## project 設計の方針

・Vuexはグローバルで扱いたいもの以外には使わず、Composition-APIでStoreパターンを実装する。

## 型定義がないときに作成する流れ

[参考URL](https://scrapbox.io/yamam00s/Nuxt_Plugins%E8%BF%BD%E5%8A%A0%E6%99%82%E3%81%ABVue%E3%81%AB%E5%9E%8B%E5%AE%9A%E7%BE%A9%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E4%BD%9C%E3%82%8B)

## 型定義について

[参考URL](https://www.memory-lovers.blog/entry/2019/04/14/020815)

Nuxt.js 2.5からTypeScriptサポートが強化された。
だがプラグインを使う場合は型定義が足りない場合がある。

- 基本的には

1. tsconfig.jsonのtypesに追加するか
2. Vueインターフェースを拡張して対応する

1. について

```json
  {
    "compilerOptions": {
      "types": [
        "@types/node",
        "@nuxt/vue-app",
+       "nuxt-i18n/types",
+       "@nuxtjs/axios"
      ]
    },
  }
```

2. について

```ts
declare module "vue/types/vue" {
  interface Vue {
     // ここに書く
  }
}
```

## 本番環境へデプロイ

env proが提供される.

`$ yarn generate`

dist配下に静的ファイルが生成される。
このdistの中身が、今回Firebase Hostingによってホスティングされる静的ファイル群です。

ビルドが成功したら、デプロイ用のコマンド、

firebase deploy --only hosting
