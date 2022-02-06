<template>
  <div>
    <div class="cursor"></div>
    <div class="follower"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
} from '@nuxtjs/composition-api';
import { throttle } from '@/composables/utils/infanticide';

export default defineComponent({
  setup() {
    // const delay = 10; // 数字を大きくするとフォロワーがより遅れて来る
    // const fWidth = 40; // フォロワーの大きさ
    let cursor: Element | null;
    // let follower: Element | null;
    // let folX = 0; // フォロワーのX座標
    // let folY = 0; // フォロワーのY座標
    // const cWidth = 8; // カーソルの大きさ

    /** まずは現在のマウスの位置を取得する */

    // const addHover = () => {
    //   if (cursor === null) return;
    //   cursor.classList.add('hov_');
    // }

    // const removeHover = () => {
    //   if (cursor === null) return;
    //   cursor.classList.remove('hov_');
    // }

    const _fnWrap = throttle((e: MouseEvent): void => {
      const mouseX = e.pageX;
      const mouseY = e.pageY;
      if (cursor === null) return;
      (cursor as HTMLElement).style.left = `${mouseX}px`;
      (cursor as HTMLElement).style.top = `${mouseY}px`;
      // リンクにホバー時はクラスをつける
      const linkElem = document.querySelectorAll('a');
      for (let i = 0; i < linkElem.length; i++) {
        linkElem[i].addEventListener('mouseover', function (_) {
          if (cursor === null) return;
          cursor.classList.add('hov_');
        });
        linkElem[i].addEventListener('mouseout', function (_) {
          if (cursor === null) return;
          cursor.classList.remove('hov_');
        });
      }
      /**
       * Todo: なぜかうまく動かない。
       */
      // if (cursor === null && follower === null) return;
      // G.to(
      //   {},
      //   {
      //     duration: 0.001,
      //     repeat: -1,
      //     /** アニメーションが新しい反復サイクル(repeat)に入る度に呼び出す関数 */
      //     onRepeat: () => {
      //       folX += (mouseX - folX) / delay;
      //       folY += (mouseY - folY) / delay;

      //       console.log(`folX${folX}`);
      //       console.log(`folY${folY}`);

      //       G.set(follower, {
      //         css: {
      //           left: folX - fWidth / 2,
      //           top: folY - fWidth / 2,
      //         },
      //       });

      //       G.set(cursor, {
      //         css: {
      //           left: mouseX - cWidth / 2,
      //           top: mouseY - cWidth / 2,
      //         },
      //       });
      //     },
      //   }
      // );
      /** ここまで */
    });
    /** addEventListenerのhandler */
    const handler = (e: MouseEvent) => {
      _fnWrap(e);
    };

    onMounted(() => {
      cursor = document.querySelector('.cursor');
      // follower = document.querySelector('.follower');
      window.addEventListener('mousemove', handler);
    });

    onUnmounted(() => {
      window.removeEventListener('mousemove', handler);
    });

    return {};
  },
});
</script>

<style lang="scss" scoped>
/** @see https://coliss.com/articles/build-websites/operation/css/css-pointer-events.html */

.cursor,
.follower {
  border-radius: 50%; // 半円にする
  cursor: none;
  left: -4px;
  pointer-events: none;
  position: absolute; // mainの左上に配置
  top: -4px;
  // transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s; // めっちゃ遅くなる.
  will-change: transform;
}

.cursor {
  background-color: #fff;
  height: 8px; // カーソルの大きさ
  width: 8px; // カーソルの大きさ
  z-index: 1001;

  &.hov_ {
    background: rgba(200, 50, 50, 0.75);
    height: 32px; //カーソルの直径
    left: -12px; //大きくなった分の座標調節
    top: -12px; //大きくなった分の座標調節
    transition-duration: 0.5;
    width: 32px; //カーソルの直径
  }
}

.follower {
  background-color: #fdfe00;
  height: 40px;
  width: 40px;
  z-index: 1000;
}
</style>
