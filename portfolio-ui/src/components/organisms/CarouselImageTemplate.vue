<template>
  <div class="image">
    <div class="image-container1">
      <CarouselImage
        :size="'50%'"
        :images="images"
        :link="'works/gyfu'"
        :link-title="'Gyfu.'"
        :hover-desc="'友人と立ち上げたアクセサリーブランドGyfu.'"
      />
      <CarouselImage
        :size="'50%'"
        :images="images"
        :link="'https://gyfu.thebase.in/'"
        :link-title="'Gyfu.'"
        :hover-desc="'友人と立ち上げたアクセサリーブランドGyfu.'"
      />
    </div>
    <div class="image-container2">
      <CarouselImage
        :ref="images"
        :size="'50%'"
        :images="images"
        :link="'https://gyfu.thebase.in/'"
        :link-title="'BLOG'"
        :hover-desc="'Createrが集まる, Creaters Blogを配信'"
      />
      <CarouselImage
        :ref="images"
        :size="'50%'"
        :images="images"
        :link="'https://gyfu.thebase.in/'"
        :link-title="'Article'"
        :hover-desc="'Zennなどで知見を投稿'"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api';
import CarouselImage from '@/components/atoms/CarouselImage.vue';
import { arrayFactorys } from '@/composables/utils/factorys/';

export default defineComponent({
  components: {
    CarouselImage,
  },
  setup() {
    /** envで分けよう */
    const images = ref(
      arrayFactorys('https://source.unsplash.com/user/erondu/600x400', 4)
    );
    /** ここまで */
    return {
      images,
    };
  },
});
</script>

<style lang="scss">
.image {
  margin: 0 auto;
  width: 95vw;

  &-container1 {
    @include displayFlex(center, row, center);
  }

  &-container2 {
    @include displayFlex(center, row, center);
  }
}
</style>
