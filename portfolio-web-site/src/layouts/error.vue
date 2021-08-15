<template>
  <main class="contents">
    <section class="error">
      <h2 class="error__title">{{ error.statusCode }}</h2>
      <h2 class="error__title">{{ error.message }}</h2>
      <nuxt-link class="error__button" to="/">HOME</nuxt-link>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { app } = useContext();
    // ヘルパーを使用して、メソッド内（およびメソッド内）のヘッドプロパティを直接操作できます
    const { titleTemplate, meta } = useMeta();
    titleTemplate.value = `%s | ${app.nuxt.err.statusCode} ${app.nuxt.err.message}`;
    meta.value = [
      {
        hid: 'description',
        name: 'description',
        content: `${app.nuxt.err.statusCode} ${app.nuxt.err.message}`,
      },
    ];
    return {
      error: app.nuxt.err,
    }
  },
  head: {}, // なぜか読み込まないとerrorが動作しない。
});
</script>

<style lang="scss" scoped>
.contents {
  .error {
    @include inner();

    &__title {
      margin-bottom: 24px;
    }

    // &__button {

    // }

  }
}
</style>
