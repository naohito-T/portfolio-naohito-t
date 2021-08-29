<template>
  <main class="contents">
    <section class="section1">
      <Title :en-title="'About'" :ja-title="'naohito-Tについて'"/>
    </section>
    <section class="section2">
      <AboutMarkdown />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Title from '@/components/common/Title.vue';
import AboutMarkdown from '@/components/molecules/AboutMarkdown.vue';


export default defineComponent({
  components: {
    Title,
    AboutMarkdown,
  },
  setup() {
    return {}
  },
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
}
</style>
