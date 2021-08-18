<template>
  <div class="return">
    <template v-if="isScroll">
      <transition>
        <p class="return__text" @click="returnTop">TOP</p>
      </transition>
    </template>
    <template v-else>
      <transition>
        <p class="return__text">SCROLL</p>
      </transition>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api';
export default defineComponent({
  setup() {
    const isScroll = ref<Boolean>(false);
    let scrollY = 0; // scrollYの値
    const isScrollIgnition = 100; // scrollY値の発火ポイント

    const isWindowScroll = () => {
      scrollY = window.scrollY;
      console.log(`scrollY: ${scrollY}`);
      isScroll.value = scrollY >= isScrollIgnition;
    }
    const returnTop = () => {
      console.log('return');
      scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    onMounted(() => {
      addEventListener('scroll', isWindowScroll)
    });

    return {
      isScroll,
      returnTop,
    }
  }
})
</script>

<style lang="scss" scoped>
.return {
  left: 40px;
  position: absolute;
  top: 0;

  &__text {
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
  }
}
</style>
