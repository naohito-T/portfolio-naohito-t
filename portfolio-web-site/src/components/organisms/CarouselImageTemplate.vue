<template>
  <div class="image">
    <div class="image-container1">
      <CarouselImage :size="'70%'" />
      <CarouselImage :size="'30%'" />
    </div>
    <div class="image-container2">
      <CarouselImage />
      <CarouselImage />
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
import { defineComponent } from '@nuxtjs/composition-api';
import CarouselImage from '@/components/atoms/CarouselImage.vue';

export default defineComponent({
  components: {
    CarouselImage,
  },
  setup() {

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
