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

  height: 120px;
  padding: 120px;
  text-align: center;
  width: 100%;
  z-index: 6;
  border: 1px solid;

  &-inner {
    @include displayFlex(center, space-between);
  }

  .navigation {
    @include displayFlex(center, space-between);

    .menu-list {
      @include displayFlex(center, space-between);
    }
  }
}
</style>
