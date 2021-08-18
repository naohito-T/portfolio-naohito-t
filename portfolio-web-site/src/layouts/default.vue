<template>
  <div id="root" :class="isTop ? 'top' : ''">
  <!-- top pageだったら何かをしよう -->
    <template v-if="!isTop">
      <Header />
      <ReturnTopButton />
    </template>
    <nuxt />
    <template v-if="!isTop">
      <Footer />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api';
import Header from '@/components/common/Header.vue';
import ReturnTopButton from '@/components/common/ReturnTopButton.vue';
import Footer from '@/components/common/Footer.vue';

export default defineComponent({
  components: {
    Header,
    ReturnTopButton,
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

<style lang="scss">
/** すべてのpageに適用するためscopedは付与しない。 */
#root {
  height: auto;
  margin-top: 120px;
  overflow: hidden;
  width: 100%;

  /** pageごとに適用 */

  /** topが付与されているpage */
  .contents {
    @include innerFull(); /* header も透過させる */
  }

  /** topが付与されていないpage */
  &:not(.top) .contents {
    padding-top: 190px;
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
