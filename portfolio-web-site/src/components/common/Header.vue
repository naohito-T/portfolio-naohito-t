<template>
  <header class="header">
    <div class="header-inner">
      <h1 class="site-title">
        <nuxt-link
          to="/"
          class="menu-list-item__link"
          :class="page === '/' ? 'current' : ''"
          >Naohito-T</nuxt-link
        >
      </h1>
      <nav class="navigation">
        <ul class="menu-list">
          <li class="menu-list-item">
            <nuxt-link
              to="/work"
              class="menu-list-item__link"
              :class="page === '/work' ? 'current' : ''"
              >WORK</nuxt-link
            >
          </li>
          <li class="menu-list-item">
            <nuxt-link
              to="/about"
              class="menu-list-item__link"
              :class="page === '/about' ? 'current' : ''"
              >ABOUT</nuxt-link
            >
          </li>
          <li class="menu-list-item">
            <img
              src="../../assets/images/png/download_icon.png"
              alt="download icon"
              class="menu-list-item__icon"
            />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { route } = useContext();
    /** カレントpageの場合はれいあうとを変更する */
    const page = ref(route.value.path);
    return {
      page,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  @include positionStickyBase(40px, 0, 0, 0);

  margin-top: -30px;
  z-index: 6;

  &-inner {
    @include displayFlex(center, row, space-between);

    .site-title {
      font-size: $fontSize24;
      margin: 0 20px;
    }

    .navigation {
      @include displayFlex(center, row, space-between);

      .menu-list {
        @include displayFlex(center, row, space-between);

        &-item {
          font-size: $fontSize20;
          margin: 0 20px;

          &__icon {
            width: 30px;
          }
        }
      }
    }
  }
}
</style>
