<template>
  <div class="title">
    <h1 class="title__text">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  setup() {

    return {

    }
  }
})
</script>

<style lang="scss" scoped>
.title {
  width: 90vw;

  &__text {
    color: #fff;
    font-size: 18vw;
  }
}
</style>
