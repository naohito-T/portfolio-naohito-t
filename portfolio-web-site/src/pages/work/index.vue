<template>
  <main class="contents">
    <section class="section1">
      <Title :en-title="'WORK'" :ja-title="'ワーク'"/>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Title from '@/components/common/Title.vue';
export default defineComponent({
  components: {
    Title,
  },
  setup() {

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
