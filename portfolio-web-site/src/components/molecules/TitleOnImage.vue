<template>
  <div class="wrapper">
    <div class="wrapper-title">
      <Title :en-title="'Login'" :ja-title="'管理者のみ'"/>
    </div>
    <div>
      <img :src="`${img}`" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Title from '@/components/common/Title.vue';

export default defineComponent({
  components: {
    Title
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
    img: {
      type: String,
      required: true,
    }
  },
});
</script>
<style lang="scss" scoped>
.wrapper {
  @include displayFlex(center, row, space-around);

  &-title {
    flex: 1;
  }
}
</style>
