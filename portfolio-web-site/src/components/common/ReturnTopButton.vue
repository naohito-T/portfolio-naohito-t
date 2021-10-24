<template>
  <div class="return">
    <template v-if="isScroll">
      <transition>
        <p class="return-text" @click="returnTop">
          <span class="return-text__part">TOP</span>
        </p>
      </transition>
    </template>
    <template v-else>
      <transition>
        <p class="return-text">
          <span class="return-text__part">SCROLL</span>
        </p>
      </transition>
    </template>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
} from '@nuxtjs/composition-api';
export default defineComponent({
  setup() {
    const isScroll = ref<Boolean>(false);
    let scrollY = 0; // scrollYの値
    const isScrollIgnition = 100; // scrollY値の発火ポイント

    const isWindowScroll = () => {
      scrollY = window.scrollY;
      console.log(`scrollY: ${scrollY}`);
      isScroll.value = scrollY >= isScrollIgnition;
    };
    const returnTop = () => {
      console.log('return');
      scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
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
    };
  },
});
</script>

<style lang="scss" scoped>
.return {
  color: #fff;
  height: 100%;
  position: absolute;
  right: 18px;
  top: 0;
  z-index: 10;

  &-text {
    position: sticky;
    text-orientation: mixed;
    top: 500px;
    writing-mode: vertical-rl;

    &__part {
      cursor: n-resize;
      font-size: $fontSize30;
      text-orientation: upright;
    }
  }
}
</style>
