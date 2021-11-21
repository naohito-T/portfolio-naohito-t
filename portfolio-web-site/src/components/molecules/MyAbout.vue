<template>
  <div class="wrapper">
    <div class="wrapper-img"></div>
    <div class="wrapper-markdown" v-html="mydetail"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import mydetail from '@/assets/markdown/Mydetail.md';

export default defineComponent({
  setup() {
    return {
      mydetail,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  @include displayFlex(center, row, space-evenly);

  margin: 0 auto 90px;
  width: 95vw;

  &-img {
    background-image: url('../../assets/images/png/my.png');
    background-size: cover;
    border: 2px solid #fdfe00;
    height: 600px;
    margin-right: 70px;
    width: 50%;
  }

  &-markdown {
    color: getcolor(--color-background, 1);
    font-size: $fontSize18;
    width: 50%;
  }
}
</style>
