<template>
  <div class="wrapper" :style="{ width: size }">
    <section class="carousel" aria-label="Gallery">
      <ol class="carousel-viewport">
        <li
          v-for="(image, key) in images"
          :id="`carousel__slide${key}`"
          :key="key"
          :style="{ backgroundImage: `url(${image})` }"
          tabindex="0"
          class="carousel-viewport__slide"
        >
          <div class="carousel__snapper"></div>
          <div class="carousel-hover">
            <p class="carousel-hover__text1">coffee</p>
            <p class="carousel-hover__text2">Is delicious; let's take a break in having served coffee</p>
          </div>
        </li>
      </ol>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    size: {
      type: String,
      required: true,
    },
    images: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup() {

    return {};
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  @include caroucelSlider();

  width: 50%;

  &:hover .carousel-hover {
    /* 不透明にして表示 */
    opacity: 1;

    /* padding-topで上からスライド */
    padding-top: 10px;
  }
}
</style>
