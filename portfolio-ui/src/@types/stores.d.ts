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
