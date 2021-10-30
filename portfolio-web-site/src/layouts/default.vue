<template>
  <div id="root" :class="isTop ? 'top' : ''">
    <!-- top pageだったら何かをしよう -->
    <CustomCursor />
    <template v-if="!isTop">
      <Header />
    </template>
    <nuxt />
    <template v-if="!isTop">
      <ReturnTopButton />
      <ColorThemeChangeButton />
      <Footer />
    </template>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  computed,
  onMounted,
  provide,
  inject,
} from '@nuxtjs/composition-api';
import CustomCursor from '@/components/atoms/Cursor.vue';
import ReturnTopButton from '@/components/common/ReturnTopButton.vue';
import ColorThemeChangeButton from '@/components/atoms/button/ColorThemeChangeButton.vue';
/** firebase */
import {
  UserStore,
  UserStoreType,
} from '@/composables/stores/store/user-store';
import { UserStoreKey } from '@/composables/stores/key/user-store-key';
import { auth } from '@/plugins/firebase';

export default defineComponent({
  components: {
    Header: () => import('@/components/common/Header.vue'),
    CustomCursor,
    ReturnTopButton,
    ColorThemeChangeButton,
    Footer: () => import('@/components/common/Footer.vue'),
  },
  setup() {
    const { route } = useContext();
    const isTop = computed(() => route.value.path === '/');

    /**
     * provideは送信側/injectは受信側を想定しているようですが、
     * 上記の通り、provideとinjectを同時に使う事も問題ありません。
     */
    provide(UserStoreKey, UserStore());
    const store = inject(UserStoreKey) as UserStoreType;

    onMounted(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          store.setUser(user);
        } else {
          console.log('Not User =========');
        }
      });
    });

    return {
      isTop,
      store,
    };
  },
});
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
