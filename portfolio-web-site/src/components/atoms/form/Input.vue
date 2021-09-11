<template>
    <input
      class="form-input__part"
      :value="modelValue"
      :autocomplete="autoComplete"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    // type: {
    //   type: String,
    //   required: true,
    // },
    // name: {
    //   type: String,
    //   required: true,
    // },
    autoComplete: {
      type: String,
      required: true,
    },
    // placeText: {
    //   type: String,
    //   required: true,
    // }
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
.form-input__part {
  margin-bottom: 5vh;
  padding: 50px;
  width: 50vw;
}
</style>
