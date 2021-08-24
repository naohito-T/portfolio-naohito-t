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
      <li>
        <button @click="colorSchemeChange">click</button>
      </li>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent, ref, useContext, onMounted } from '@nuxtjs/composition-api';

export default defineComponent({

  setup() {
    const { route } = useContext();
    const page = ref<String>(route.value.path);
    const isMedia = ref<Boolean>(false); // prefers true = dark , false = white

    // localStoreagに入れないといけない
    // cssの変更はmediaでscss担当
    // リロードしたらlocalStorageの値でmediaを変更
    onMounted(() => {
      // userが選択したもの
      const userTheme = localStorage.getItem('data-theme');
      console.log(`userTheme :${userTheme}`);
      // dark true
      isMedia.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const mediaTheme = isMedia.value ? 'dark' : 'white';
      localStorage.setItem('data-theme', userTheme ?? mediaTheme);
      document.documentElement.setAttribute("data-theme", userTheme ?? mediaTheme)
    });

    // localStorageの値とscssが展開した値を変更
    const colorSchemeChange = () => {
      const userThema = localStorage.getItem('data-theme');
      const user = userThema === 'dark' ? 'light' : 'dark';
      localStorage.setItem('data-theme', user);
      document.documentElement.setAttribute("data-theme", user);
    };

    return {
      page,
      colorSchemeChange
    }
  },
});

</script>

<style lang="scss" scoped>
.header {
  @include fixedTopLeft(0);
  @include margin(0, 0, 0, 0);

  border: 1px solid;
  height: 120px;
  // padding: 90px;
  text-align: center;
  width: 100%;
  z-index: 6;

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
