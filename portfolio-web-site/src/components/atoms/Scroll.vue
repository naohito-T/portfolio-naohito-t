<template>
  <div class="scroll">
    <span class="scroll__text">{{ message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true,
    }
  },
  setup() {
    return {

    }
  },
});
</script>
<style lang="scss">
/** include動的が見つからない */
// ならクラス名をbindし、propsでclassを紐付ける方法
// includeするクラスが多くなるとファイルサイズ大きくなりそうだけど
.scroll {
  @include textRightToLeft(#fff, 100%, 7s);
}
</style>
