<!-- header いれるかも 管理画面へのloginにする。 -->
<template>
  <main class="contents">
    <section class="section1">
      <TitleOnImage :en-title="'Login'" :ja-title="'管理者のみ'" :img="'https://source.unsplash.com/user/erondu/600x400'"/>
    </section>
    <section class="section2">

    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
// import Title from '@/components/common/Title.vue';
import TitleOnImage from '@/components/molecules/TitleOnImage.vue';

export default defineComponent({
  components: {
    TitleOnImage
  }
})
</script>

<style lang="scss" scoped>
.contents {
  .section1 {
    @include inner();
  }
}

</style>
