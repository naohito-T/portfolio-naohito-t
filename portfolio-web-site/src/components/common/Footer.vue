<template>
  <footer class="footer">
    <h2 class="footer-title">ALL LIST</h2>
    <div class="footer-inner">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup()
})

</script>

<style lang="scss">

.footer {
  border: 2px solid;

  &-title {
    font-size: 20px;
  }

  &-inner {
    @include displayFlex();
  }

}

</style>
