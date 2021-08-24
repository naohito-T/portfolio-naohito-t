<!-- 横スクロール場面 -->
<template>
  <main class="contents">
    <section class="section1">
      <MainTitle :title="'Coding In Design'" />
    </section>
    <section class="section2">
      <HorizontalList :anker-link="'/work'" :imgURL="'https://source.unsplash.com/user/erondu/400x400'" :title="'HELLO'" :sub-title="'subTitle'"/>
      <RightArrowButton />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useContext, onMounted, provide } from '@nuxtjs/composition-api';
import { useImage } from '@/composables/repositories/use-image';
import ImageKey from '@/composables/repositories/use-image-key';
import MainTitle from '@/components/atoms/MainTitle.vue';
import HorizontalList from '@/components/molecules/HorizontalList.vue';
import RightArrowButton from '@/components/atoms/RightArrowButton.vue';

// ここは横スクロールにする。
// ここはenvの確認用

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
      // env確認
      console.log(process.env.apiKey)
      console.log(process.env.authDomain)
      console.log(process.env.projectId)
      console.log(process.env.storageBucket)
      console.log(process.env.messagingSenderId)
      console.log(process.env.appId)
      console.log(process.env.measurementId)
      console.log(process.env.apiBaseURL);
    })

    return {
    }
  },
})
</script>

<style lang="scss" scoped>
// .contents {
// .section1 {
//   @include inner();
// }
// }
</style>

