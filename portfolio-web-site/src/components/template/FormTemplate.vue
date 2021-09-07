<template>
  <form class="form">
    <slot></slot> <!-- React props.children みたいなもの -->
    <button @click="method"></button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    method: {
      type: Function,
      required: true,
    }
  },
  setup() {
    return {

    };
  },
});
</script>

<style lang="scss">
.form {
  margin: 0 auto;
}
</style>
