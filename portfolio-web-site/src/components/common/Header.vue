<template>
  <header class="header">
    <div class="header-inner">
      <nav class="navigation">
        <ul class="menu-list">
          <li class="menu-list-item">
            <nuxt-link to="/" class="menu-list-item__link" :class="page === '/' ? 'current' : ''">TOP</nuxt-link>
          </li>
          <li class="menu-list-item">
            <nuxt-link to="/home" class="menu-list-item__link" :class="page === '/' ? 'current' : ''">HOME</nuxt-link>
          </li>
          <li class="menu-list-item">
            <nuxt-link to="/" class="menu-list-item__link" :class="page === '/about' ? 'current' : ''">ABOUT</nuxt-link>
          </li>
          <i class="menu-list-item">
            <nuxt-link to="/login" class="menu-list-item__link" :class="page === '/login' ? 'current' : ''">LOGIN</nuxt-link>
          </i>
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
    const page = ref<string>(route.value.path);


    return {
      page,
    }
  },
});

</script>

<style lang="scss" scoped>
.header {
  @include fixedTopLeft(0);
  @include margin(0, 0, 0, 0);

  border: 1px solid;
  height: 90px;
  padding: 90px;
  text-align: center;
  z-index: 6;
  width: 100%;

  &-inner {
    @include displayFlex(center, row, space-between);
  }

  .navigation {
    @include displayFlex(center, row, space-between);

    .menu-list {
      @include displayFlex(center, row, space-between);

      &-item {
        @include displayFlex(center, row, space-between);
      }

    }
  }
}
</style>
