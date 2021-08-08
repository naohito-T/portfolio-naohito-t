<template>
  <header class="header">
    <div class="header-inner">
      <nav class="navigation">
        <ul class="menu-list">
          <li class="menu-list-item">
            <nuxt-link to="/">TOP</nuxt-link>
          </li>
          <li class="menu-list-item">
            <nuxt-link to="/home">HOME</nuxt-link>
          </li>
          <li class="menu-list-item">
            <nuxt-link to="/">RELEASE</nuxt-link>
          </li>
          <li class="menu-list-item">
            <nuxt-link to="/login">LOGIN</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts"></script>

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
