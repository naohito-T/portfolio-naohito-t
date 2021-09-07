<template>
<main class="contents">
    <section class="section1">
      <Title :en-title="enTitle" :ja-title="jaTitle" />
    </section>
    <section class="section2">
      <FormTemplate :method="method">

      </FormTemplate>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Title from '@/components/common/Title.vue';
import FormTemplate from '@/components/template/FormTemplate.vue';

export default defineComponent({
  components: {
    Title,
    FormTemplate
  },
  props: {
    enTitle: {
      type: String,
      required: true,
    },
    jaTitle: {
      type: String,
      required: true,
    },
    method: {
      type: Function,
      required: true,
    }
  },
  setup() {
    return {}
  },
})
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
