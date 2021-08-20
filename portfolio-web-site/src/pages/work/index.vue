<template>
  <main class="contents">
    <section class="section1">
      <Title :en-title="'WORK'" :ja-title="'ワーク'"/>
    </section>
    <section class="section2">
      <div class="scroll">
        <span class="scroll__text">Code In Design</span>
      </div>
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

  .section2 {
    .scroll {
      @include textRightToLeft(#fff, 100%, 7s);
    }
  }
}

</style>
