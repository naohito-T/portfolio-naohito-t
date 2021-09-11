<template>
  <header class="header">
    <div class="header-inner">
      <nav class="navigation">
        <ul class="menu-list">
          <li class="menu-list-item">
            <nuxt-link to="/" class="menu-list-item__link" :class="page === '/' ? 'current' : ''">TOP</nuxt-link>
          </li>
          <li class="menu-list-item">
            <nuxt-link to="/work" class="menu-list-item__link" :class="page === '/' ? 'current' : ''">WORK</nuxt-link>
          </li>
          <li class="menu-list-item">
            <nuxt-link to="/about" class="menu-list-item__link" :class="page === '/about' ? 'current' : ''">ABOUT</nuxt-link>
          </li>
          <li class="menu-list-item">
            <nuxt-link to="/login" class="menu-list-item__link" :class="page === '/login' ? 'current' : ''">LOGIN</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent, ref, useContext } from '@nuxtjs/composition-api';

export default defineComponent({

  setup() {
    const { route } = useContext();
    /** カレントpageの場合はれいあうとを変更する */
    const page = ref(route.value.path);
    return {
      page
    }
  },
});

</script>

<style lang="scss" scoped>
.header {
  // @include fixedTopLeft(0);
  // @include margin(0, 0, 0, 0);

  // height: 120px;
  // text-align: center;
  // width: 100%;
  @include fixedTopRight();

  z-index: 6;

  &-inner {
    @include displayFlex(center, row, space-between);
  }

  .navigation {
    @include displayFlex(center, row, space-between);

    .menu-list {
      @include displayFlex(center, column, space-between);

      // &-item {
      //   @include displayFlex(center, row, space-between);
      // }
    }
  }
}
</style>
