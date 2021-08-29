<template>
  <div class="title">
    <h1 class="title__en">{{ enTitle }}</h1>
    <p class="title__ja">{{ jaTitle }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    enTitle: {
      type: String,
      required: true,
    },
    jaTitle: {
      type: String,
      required: true,
    }
  },
  setup() {

  }
});
</script>

<style lang="scss" scoped>
.title {
  @include displayFlex(center, column, center);

  background-color: #222;
  color: $fontColor;
  flex: 1;
  font-size: $fontSize70;
  height: 30vh;
  margin-bottom: 20px;
  width: 100%;

  &__ja {
    font-size: $fontSize10;
  }
}
</style>
