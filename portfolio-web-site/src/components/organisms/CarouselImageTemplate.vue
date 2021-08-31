<template>
  <CarouselImage />
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
