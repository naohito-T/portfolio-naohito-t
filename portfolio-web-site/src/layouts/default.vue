<template>
  <div id="root" :class="isTop ? 'top' : ''">
  <!-- top pageだったら何かをしよう -->
    <nuxt />
    <template v-if="!isTop">
      <ReturnTopButton />
      <Header />
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
  @include displayRoot();

  background-color: #000;
  overflow: hidden;
  width: 100vw;
  will-change: transform; // レンダリング速度をあげる。

  /** top以外のコンテンツをスクロール下にいける。 */
  &:not(.top) {
    overflow: visible; // overflow初期値。これを指定しないとposition: styikyがきかない。
    scrollbar-color: transparent transparent; /* thumb and track color */
    scrollbar-width: 0;
    width: 100%; // width: 100vw;だとスクロールバーを含まないため無理。
  }

  .main {
    flex-grow: 1;
  }

  /** top pageのみ */
  .contents {
    @include displayFlex(center, row, start);

    // background-color: #000;
    height: 100vh; // 親要素に影響されずに、画面幅いっぱいに合わせる方法
    width: 100%;
    will-change: transform;
  }

  /** topが付与されていないpage */
  &:not(.top) .contents {
    @include displayFlex(center, column, start);

    background-color: $mainBlackColor;
    height: auto;
    // height: calc(100vh - 300px); // heightの高さはheaderの高さとfooterの高さを引けばいいのだがheaderが浮いているためfooterのみ
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
