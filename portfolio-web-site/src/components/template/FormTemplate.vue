<template>
  <form class="form" autocomplete="off">
    <div class="form-part">
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
      <!-- React props.children みたいなもの -->
      <input
        type="submit"
        value="送信"
        @click="onClick"
        class="form-button__item"
      />
    </div>
    <div class="form-button">
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api';
import { onClickFormType } from '@/composables/repositories/form';
import { onClickFormKey } from '@/composables/repositories/key';
import Input from '@/components/atoms/form/Input.vue';

export default defineComponent({
  components: {
    Input,
  },
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
  border: 2px solid #d09b52;
  border-radius: 20px;
  height: 600px;
  margin: 50px 0;
  padding: 40px 10px 0 40px;
  width: 70%;

  &-part {
    @include displayFlex(center, column, space-between);
  }

  // &-button {
  //   margin: 0 auto;
  // }
}
</style>
