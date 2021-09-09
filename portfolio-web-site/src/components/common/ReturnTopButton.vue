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
import { defineComponent, onMounted, onUnmounted, ref } from '@nuxtjs/composition-api';
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
      addEventListener('scroll', isWindowScroll);
    });

    onUnmounted(() => {
      /**
       * 削除するには制限がある
       *   イベントとメソッドが一致する必要がある
       *   オプション「capture」を指定しているときは値が一致する必要がある
       *   無名関数で登録すると解除できない
       */
      removeEventListener('scroll', isWindowScroll);
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
  color: #fff;
  position: absolute;

  &__text {
    left: 40px;
    top: 0;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    z-index: 10;
  }
}
</style>
