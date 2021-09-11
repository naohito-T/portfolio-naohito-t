<template>
  <main class="contents">
    <section class="section1">
      <Title :en-title="enTitle" :ja-title="jaTitle" />
    </section>
    <section class="section2">
      <FormTemplate :method="method">
        <Input
          :type="'email'"
          :name="'email'"
          :auto-complete="'email'"
          :placeholder="'email'"
        />
        <Input
          :type="'password'"
          :name="'pass'"
          :auto-complete="'password'"
          :placeholder="'password'"
        />
      </FormTemplate>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Title from '@/components/common/Title.vue';
import FormTemplate from '@/components/template/FormTemplate.vue';
import Input from '@/components/atoms/form/Input.vue';

export default defineComponent({
  components: {
    Title,
    FormTemplate,
    Input,
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
    },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.contents {
  .section1 {
    @include displayFlex();

    height: 100vh;
    margin: 0 auto;
    width: 100%;
  }

  .section2 {
    width: 100%;
  }
}
</style>
