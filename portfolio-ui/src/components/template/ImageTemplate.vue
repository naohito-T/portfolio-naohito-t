<template>
  <div>
    <vue-slick-carousel class="slider" v-bind="settings">
      <p
        v-for="(url, index) in debugState.imageURL"
        :key="index"
        class="slider-list-item"
      >
        <img class="slider-list-item__image" :src="url" />
      </p>
    </vue-slick-carousel>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  // useAsync,
  reactive,
  // useContext,
} from '@nuxtjs/composition-api';
// import { ImageURL } from '@/lib/api/types/response/home';

import { arrayFactorys } from '@/composables/utils/factorys/_factorys-test';

export default defineComponent({
  setup() {
    // const state = reactive<{ imageURLs: ImageURL[] }>({
    //   imageURLs: [],
    // });
    // const { app } = useContext();

    const debugState = reactive<{ imageURL: string[] }>({
      imageURL: [],
    });

    const settings = reactive<{ [k: string]: string | number | boolean }>({
      centerMode: true,
      centerPadding: '20px',
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      arrows: false,
    });

    /** 8つの画像が必要 */

    debugState.imageURL = arrayFactorys(
      'https://source.unsplash.com/VkwRmha1_tI/800x533',
      5
    );

    // useAsync(async () => {
    //   await app.$stores.loading.loadingAction(async () => {
    //     // state.imageURLs = await app.$api.home.fetchFileUrls(`image/${path}`);
    //     // debugState.imageURL = await app.$api.home.fetchDebugFileUrls('800x533');
    //     // debugState.imageURL = await app.$api.home.fetchDebugFileUrls('800x533');
    //     // console.log(`stateを取得: ${state.imageURLs}`);

    //     console.log(`debut stateを取得: ${JSON.stringify(debugState)}`);
    //     // if (state.imageURLs.length > 0) {
    //     // }
    //   });
    // });

    return {
      debugState,
      settings,
    };
  },
});
</script>
