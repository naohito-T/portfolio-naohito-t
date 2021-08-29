<template>
  <main class="contents">
    <section class="section1">
      <Title :en-title="'About'" :ja-title="'naohito-Tについて'"/>
    </section>
    <section class="section2">
      <article class="markdown">
        <div>
          <div>
            <h2>Skill</h2>
          </div>
          <div>
            <p>hello</p>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Title from '@/components/common/Title.vue';
import about from '@/assets/markdown/about.md';

export default defineComponent({
  components: {
    Title,
  },
  setup() {
    return {
      about,
    };
  },
});
</script>

<style lang="scss" scoped>
.contents {
  .section1 {
    @include inner();
  }

  .section2 {
    .markdown {
      visibility: visible;
    }
  }
}
</style>
