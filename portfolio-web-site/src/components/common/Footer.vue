<template>
  <footer class="footer">
    <div class="footer-inner">
      <a href="" class="footer-inner-button">
        <span class="footer-inner-button__title">Please Message</span>
      </a>
    </div>
    <CopyLight/>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CopyLight from '@/components/atoms/CopyLight.vue';

export default defineComponent({
  components: {
    CopyLight,
  },
  setup() {}
})

</script>

<style lang="scss">

.footer {
  height: 300px;
  width: 100%;

  &-inner {
    // @include displayFlex();
    height: 200px;
    text-align: center;

    &-button {
      @include hoverBlackToLeft();
    }
  }
}

</style>
