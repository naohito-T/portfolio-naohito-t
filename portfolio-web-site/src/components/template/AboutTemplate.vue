<template>
  <main class="contents">
    <section class="section1">
      <Title :en-title="enTitle" :ja-title="jaTitle" />
    </section>
    <section class="section2">
      <MyAbout />
      <AboutMarkdown />
    </section>
  </main>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  useFetch,
  reactive,
} from '@nuxtjs/composition-api';
// import { gsap as G } from 'gsap';
import Title from '@/components/common/Title.vue';
import MyAbout from '@/components/molecules/MyAbout.vue';
import AboutMarkdown from '@/components/molecules/AboutMarkdown.vue';
/** type */
import { ImageURL } from '@/lib/api/types/response/home';

export default defineComponent({
  components: {
    Title,
    MyAbout,
    AboutMarkdown,
  },
  props: {
    enTitle: {
      type: String,
      required: true,
    },
    jaTitle: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { app } = useContext();
    const state = reactive<{ imageUrl: ImageURL[] }>({
      imageUrl: [],
    });
    useFetch(async () => {
      await app.$stores.loading.loadingAction(async () => {
        // await app.$api.home.fetchImageURL('image/unnamed.png');
        state.imageUrl = await app.$api.home.fetchFileUrls('image');
        console.log(`statee::: :${state.imageUrl}`);
        // console.log(`statee::: :${state.imageUrl.length}`);
        const details = await app.$api.home.fetchProjectDetailList('project');
        console.log(`detatattatataata${JSON.stringify(details)}`);
      });
      // const detailss = await app.$api.home.fetchProjectDetail('project');
      // console.log(`detatattatataata11111111${detailss}`);
    });

    return {};
  },
});
</script>

<style lang="scss" scoped>
.contents {
  position: relative;

  .section1 {
    @include displayFlex();

    margin: 0 auto 30px;
    width: 100%;
  }

  .section2 {
    width: 100%;
  }
}
</style>
