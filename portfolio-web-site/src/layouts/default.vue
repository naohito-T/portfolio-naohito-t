<template>
  <div id="root">
  <!-- top pageだったら何かをしよう -->

  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    // topを判断
    const { route } = useContext();
    const isTop = computed(() => route.value.path === '/');
    return {
      isTop
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
