<template>
  <div id="root">
  <!-- top pageだったら何かをしよう -->
    <Header />

    <nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api';
import Header from '@/components/common/Header.vue';

export default defineComponent({
  components: {
    Header
  },
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

#root {
  height: auto;
  overflow: hidden;
}

</style>
