<!-- header いれるかも 管理画面へのloginにする。 -->
<template>
  <main class="contents">
    <section class="section1">
      <Title :en-title="'Login'" :ja-title="'管理者のみ'"/>
    </section>
    <section class="section2">

    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Title from '@/components/common/Title.vue';

export default defineComponent({
  components: {
    Title
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
