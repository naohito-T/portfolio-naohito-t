<template>
  <main class="contents">
    <section class="section1">
      <Title :en-title="'Error'" :ja-title="'エラーページ'" />
    </section>
    <section class="section2">
      <div class="error">
        <div class="error-title">
          <h2 class="error-title__mainTitle">{{ error.statusCode }}</h2>
          <p class="error-title__subTitle">{{ error.message }}</p>
        </div>
        <nuxt-link class="error__button" to="/">HOME</nuxt-link>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api';
import Title from '@/components/common/Title.vue';

export default defineComponent({
  components: {
    Title
  },
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
  .section1 {
    @include inner();
  }

  .section2 {
    width: 100%;
  }

  .error {
    @include displayFlex(center, column, center);

    color: #fff;

    &-title {
      @include displayFlex(center, row, center);

      margin-bottom: 20px;

      &__mainTitle {
        font-size: $fontSize40;
        padding: 0 20px;
      }

      &__subTitle {
        font-size: $fontSize20;
      }
    }

    &__button {
      margin-bottom: 20px;
    }
  }
}
</style>
