<template>
  <form class="form">
    <div class="form-part">
      <slot></slot> <!-- React props.children みたいなもの -->
    </div>
    <div class="form-button">
      <button @click="onClick" class="form-button__item">LOGIN</button>
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

  &-part {
    // @include displayFlex(center, column, center);
  }

  &-button {
    margin: 0 auto;
  }
}
</style>
