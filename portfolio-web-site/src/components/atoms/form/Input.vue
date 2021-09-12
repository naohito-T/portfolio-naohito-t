<template>
    <input
      class="form-input__part"
      :value="modelValue"
      v-bind="$attrs"
      autocomplete="no"
      @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
  },
  setup() {
    const userDate = reactive<{ name: string; email: string }>({
      name: '',
      email: '',
    });
    return {
      userDate,
    };
  },
});
</script>

<style lang="scss">
// .form-input__part {
//   margin-bottom: 5vh;
//   padding: 50px;
//   width: 50vw;
// }
</style>
