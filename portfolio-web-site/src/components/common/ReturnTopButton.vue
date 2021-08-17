<template>
  <div>
    <template v-if="isScroll">
      <transition>
        <button @click="returnTop">TOP</button>
      </transition>
    </template>
    <template v-else>
      <p>SCROLL</p>
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
      isScroll.value = scrollY >= isScrollIgnition;
    }
    const returnTop = () => {
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

