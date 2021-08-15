<template>
  <client-only v-if="isActive">
    <div class="loader">
      <div class="loader-inner">
        <div class="loader-inner__spinner"></div>
        <p class="loader-inner__text">Now Loading...</p>
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { app } = useContext();
    // provide(LoadingKey, useLoading())
    const isActive = computed(() => app.$stores.loading.getIsActive);
    return {
      isActive
    }
  },
});

</script>

<style lang="scss" scoped>
.loader {
  @include fixedCenter(0);
}
</style>
