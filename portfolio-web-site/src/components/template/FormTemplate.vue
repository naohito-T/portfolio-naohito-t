<template>
  <form class="form">
    <slot></slot> <!-- React props.children みたいなもの -->
    <div class="form-button">
      <button @click="onClick" class="form-button__item"></button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api';
import { onClickFormType } from '@/composables/repositories/form'
import { onClickFormKey } from '@/composables/repositories/key'

export default defineComponent({
  setup() {
    /** inject(key) as type */
    const { onClick } = inject(onClickFormKey) as onClickFormType;
    return {
      onClick,
    };
  },
});
</script>

<style lang="scss">
.form {
  margin: 0 auto;

  &-button {
    margin: 0 auto;
  }
}
</style>
