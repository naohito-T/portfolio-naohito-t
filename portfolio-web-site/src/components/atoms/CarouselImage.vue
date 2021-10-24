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
            <p class="carousel-hover__text--desc">{{ hoverDesc }}</p>
            <a :href="link" target="_blank" rel="noopener noreferrer"><p class="carousel-hover__text-link">{{ linkTitle }}</p></a>
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
    link: {
      type: String,
      required: true,
    },
    linkTitle: {
      type: String,
      required: true,
    },
    hoverDesc: {
      type: String,
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

  .carousel-hover {
    @include displayFlex(end, row, space-between);

    &__text--desc {
      font-size: $fontSize20;
    }
  }

  &:hover .carousel-hover {
    /* 不透明にして表示 */
    opacity: 1;

    /* padding-topで上からスライド */
    padding-top: 10px;
  }
}

/** SP */
@media screen and (max-width: $mobileWidth) {
  .wrapper {
    @include displayFlex(center, column, center);
  }
}
</style>
