<!-- 横スクロール場面 -->
<template>
  <main class="contents">
    <!-- 全体を横にして  -->
    <section class="section1">
      <!-- 縦中央真ん中にする  -->
      <MainTitle :title="'Coding In Design'" />
    </section>
    <section class="section2">
      <!-- 縦いっぱいに配置して横にならべる。  -->
      <HorizontalList
        :anker-link="'/work'"
        :url="'https://source.unsplash.com/user/erondu/600x400'"
        :title="'HELLO'"
        :sub-title="'subTitle'"
      />
      <RightArrowButton />
    </section>
  </main>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  onMounted,
  onUnmounted,
  provide,
} from '@nuxtjs/composition-api';
import { useImage } from '@/composables/repositories/use-image';
import ImageKey from '@/composables/repositories/use-image-key';
import MainTitle from '@/components/atoms/MainTitle.vue';
import HorizontalList from '@/components/molecules/HorizontalList.vue';
import RightArrowButton from '@/components/atoms/RightArrowButton.vue';
/** methods */
import { onHorizontalScroll, envDebug } from '@/composables/utils/mount';

export default defineComponent({
  components: {
    MainTitle,
    HorizontalList,
    RightArrowButton,
  },
  setup() {
    const { app } = useContext();
    provide(ImageKey, useImage());
    // console.log(app.$stores.loading);
    // const testURL = ref<String>('');
    console.log(JSON.stringify(app.$api.home.getPhoto()));
    // console.log(app.$api.home.getImageURL());
    onMounted(() => {
      envDebug(); // env確認
      addEventListener('mousewheel', onHorizontalScroll);
    });
    onUnmounted(() => {
      addEventListener('mousewheel', onHorizontalScroll);
    });
    return {};
  },
});
</script>

<style lang="scss" scoped>
.contents {
  .section1 {
    background-color: #000;
  }
}
</style>
