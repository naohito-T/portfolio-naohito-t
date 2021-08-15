<template>
  <div id="root" :class="isTop ? 'top' : ''">
  <!-- top pageだったら何かをしよう -->
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default defineComponent({
  components: {
    Header,
    Footer
  },
  setup() {
    const { route } = useContext();
    const isTop = computed(() => route.value.path === '/');
    return {
      isTop,
    }
  },
})
</script>

<style lang="scss" scoped>

#root {
  height: auto;
  overflow: hidden;
  width: 100%;

  /** pageごとに適用 */

  /** topが付与されているpage */
  .contents {
    @include innerFull();
  }

  /** topが付与されていないpage */
  &:not(.top) .contents {
    margin-top: 190px;
  }
}

@media screen and (max-width: $mediaScreenContentsLimit) {
  #root {
    &:not(.top) .contents {
      margin-top: 120px;
    }
  }
}

</style>
