<template>
  <div class="image">
    <div class="image-container1">
      <CarouselImage :size="'70%'" :images="images" />
      <CarouselImage :size="'30%'" :images="images" />
    </div>
    <div class="image-container2">
      <CarouselImage :ref="images" :size="'50%'" :images="images" />
      <CarouselImage :ref="images" :size="'50%'" :images="images" />
    </div>
  </div>
</template>
<script>
/**
 * ここでやること
 * レイアウトはここで決める(画像配置の)
 * 自身で画像は非同期でとってくる。
 * とってきたのをatoms、moleculesに流す
 * ここは非同期の自走をする
 * size調整ができるようにする
 * おもかったら画像はディレクトリから取ってくる。
 * 最初は数枚を表示してどんどん取ってくる
 *
 */
import { defineComponent, ref } from '@nuxtjs/composition-api';
import CarouselImage from '@/components/atoms/CarouselImage.vue';
import { arrayFactorys } from '@/composables/utils/factorys/';

export default defineComponent({
  components: {
    CarouselImage,
  },
  setup() {
    const images = ref(arrayFactorys('https://source.unsplash.com/user/erondu/600x400', 4));
    return {
      images,
    }
  },
})
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
