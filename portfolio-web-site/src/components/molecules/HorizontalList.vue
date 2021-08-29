<template>
  <div class="horizontal">
    <article v-for="(n, key) in 10" :key="key" class="horizontal-list">
      <h2 class="horizontal-list__title">{{ title }}</h2>
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
  -ms-overflow-style: none; /** スクロールバーを消す IE, Edge 対応 */
  overflow-x: auto;  /* 横スクロールの指定 */
  scrollbar-width: none; /* Firefox 対応 */
  white-space: nowrap;  /* 横スクロールの指定 */
  width: 90%; // width 90%に指定してコンテンツが見切れて見えるように

  &::-webkit-scrollbar {
    display: none;
  }

  &-list {
    @include displayFlex();

    height: 70vh; // 画面に7割
    margin: 0 20px;
    position: relative;
    width: 100%;

    &__title {
      @include positionBase(150px, 0, 0, -40px);

      color: #fff;
      z-index: 1;
    }

    &__img {
      background-size: contain;
      height: 400px;
      width: 600px;
    }

    &__sub {
      @include positionRightLower(0, 90px);

      color: #fff;
      z-index: 1;
    }

    /** 偶数 */
    &:nth-child(2n) {
      align-items: flex-end;
    }

    /** 奇数 */
    &:nth-child(2n-1) {
      align-items: flex-start;
    }

    /** hover */
  }
}
</style>
