<template>
  <WorkTemplate :en-title="'Gyfu.'" :ja-title="'ギフ'" />
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';
import WorkTemplate from '@/components/template/WorkTemplate.vue';
export default defineComponent({
  components: {
    WorkTemplate,
  },
  setup() {
    const { route } = useContext();
    const id = route.value.params.id;
    /**
     * paramからfirebase接続
     * それで取得してくる
     * 必要なもの
     * タイトル
     * サブタイトル
     * 画像一覧
     * テキストの流れ
     */
    console.log(`aaaaaaaaaaaaa${id}`);
    return {};
  },
});
</script>
