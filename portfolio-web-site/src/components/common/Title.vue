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

<style lang="scss">
.title {
  @include displayFlex(center, column, center);

  flex: 1;
  width: 100%;
}
</style>
