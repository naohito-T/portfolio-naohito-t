<template>
  <div id="return" class="return" @click="returnTop">
    <div class="return-img">
      <img
        src="../../assets/images/png/arrow_upward.png"
        alt="upward arrow"
        class="return__part"
      />
    </div>
    <p class="return-text">
      <span class="return-text__part">BACK TO TOP</span>
    </p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
} from '@nuxtjs/composition-api';
// import { gsap as G } from 'gsap';
export default defineComponent({
  setup() {
    const isScroll = ref<Boolean>(false);
    const isScrollIgnition = 150; // scrollY値の発火ポイント
    let el: HTMLElement;

    const isWindowScroll = () => {
      isScroll.value = window.scrollY >= isScrollIgnition;
      if (isScroll.value) {
        el?.classList.add('view');
        removeEventListener('scroll', isWindowScroll);
      }
    };

    const returnTop = () => {
      scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    onMounted(() => {
      el = document.getElementById('return');
      addEventListener('scroll', isWindowScroll);
    });

    onUnmounted(() => {
      removeEventListener('scroll', isWindowScroll);
    });

    return {
      isScroll,
      returnTop,
    };
  },
});
</script>

<style lang="scss" scoped>
.return {
  color: #fff;
  height: 100%;
  opacity: 0;
  position: absolute;
  right: 18px;
  top: 0;
  transition: opacity 1s;
  z-index: 10;

  &-img {
    position: sticky;
    top: 430px;
  }

  &-text {
    position: sticky;
    text-orientation: mixed;
    top: 500px;
    writing-mode: vertical-rl;

    &__part {
      cursor: n-resize;
      font-size: $fontSize14;
      left: -14px;
      text-orientation: upright;
    }
  }
}

.view {
  opacity: 1;
}
</style>
