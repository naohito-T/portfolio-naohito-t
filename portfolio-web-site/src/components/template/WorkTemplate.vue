<template>
  <main class="contents">
    <section class="section1">
      <Title :en-title="enTitle" :ja-title="jaTitle" />
    </section>
    <section class="section2">
      <Scroll :message="'Code In Design'"/>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Title from '@/components/common/Title.vue';
import Scroll from '@/components/atoms/Scroll.vue';

export default defineComponent({
  components: {
    Title,
    Scroll
  },
  props: {
    enTitle: {
      type: String,
      required: true
    },
    jaTitle: {
      type: String,
      required: true
    },
  },
  setup() {
    return {

    }
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

    .scroll {
      @include textRightToLeft(#fff, 100%, 7s);
    }
  }
}

</style>
