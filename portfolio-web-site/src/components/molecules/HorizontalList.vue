<!-- <template>
  <div class="horizontal">
    <ul class="horizontal-list">
      <nuxt-link :to="ankerLink">
        <li class="horizontal-list__item">
          <img :src="imgURL" />
          <p>{{ title }}</p>
          <p>{{ subTitle }}</p>
        </li>
      </nuxt-link>
    </ul>
  </div>
</template> -->

<template>
  <div class="horizontal">
    <article class="horizontal-top">
      <h1 class="horizontal-top__title">mainTitle</h1>
    </article>
    <article v-for="(n, key) in 10" :key="key" class="horizontal-list">
      <h2 class="horizontal-list__main">{{ title }}</h2>
      <!-- <div :style="{ backgroundImage: 'url(' + image_src.url + ')' }"></div> -->
      <nuxt-link :to="ankerLink" class="horizontal-list__img" :style="{ backgroundImage: `url(${imgURL})` }"></nuxt-link><!-- ここにbackground-image -->
      <p class="horizontal-list__sub">{{ subTitle }}</p>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api';
import { ImageStore } from '@/composables/repositories/use-image';
import ImageKey from '@/composables/repositories/use-image-key';

export default defineComponent({
  props: {
    ankerLink: {
      type: String,
      default: '/'
    },
    imgURL: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    }
  },
  setup() {
    const { getImage } = inject(ImageKey) as ImageStore

    return {
      getImage,
    }
  },
})
</script>

<style lang="scss" scoped>
.horizontal {
  display: flex;
  // overflow-x: scroll;
  -webkit-overflow-scrolling: touch;  /* スクロールを滑らかにする */
  // overflow-scrolling: touch;  /* スクロールを滑らかにする */
  overflow-x: auto;  /* 横スクロールの指定 */
  white-space: nowrap;  /* 横スクロールの指定 */
  width: 90%; // width 90%に指定してコンテンツが見切れて見えるように

  %-top {
    &__title {
      font-size: 80px;
    }
  }

  &-list {
    background-color: antiquewhite;
    width: 100%;

    &__item {
      // background-color: antiquewhite;
      // display: inline-block;
      // height: 400px;
      margin: 16px;
      // width: 60%;
    }
  }
}
</style>
