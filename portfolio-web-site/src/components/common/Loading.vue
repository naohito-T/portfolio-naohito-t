<template>
  <!-- <client-only v-if="isActive"> -->
  <client-only v-if="false">
    <div class="container">
      <div class="scene">
        <div class="cubes">
          <div class="cube">
            <div class="face face--front">
              <div class="face__wrap">
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
              </div>
            </div>
            <div class="face face--back">
              <div class="face__wrap">
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
              </div>
            </div>
            <div class="face face--left">
              <div class="face__wrap">
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
              </div>
            </div>
            <div class="face face--right">
              <div class="face__wrap">
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
              </div>
            </div>
            <div class="face face--top">
              <div class="face__wrap">
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
              </div>
            </div>
            <div class="face face--bottom">
              <div class="face__wrap">
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
                <div class="face__panel"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
// import {
//   defineComponent,
//   useContext,
//   computed,
//   onMounted,
// } from '@nuxtjs/composition-api';
// import { gsap as G } from 'gsap';

// export default defineComponent({
//   setup() {
//     const { app } = useContext();
//     // provide(LoadingKey, useLoading())
//     const isActive = computed(() => app.$stores.loading.getIsActive);
//     onMounted(() => {
//       select = (e) => document.querySelector(e);
//       selectAll = (e) => document.querySelectorAll(e);

//       const getDocProp = gsap.getProperty(':root');
//       const midCol = getDocProp('--mid-color');
//       const outCol = getDocProp('--out-color');
//       const faceDuration = 0.5;
//       const staggerOffset = 0.1;
//       const easing = 'sine.inOut';
//       const gtl = gsap.timeline({ repeat: -1, delay: 0.5 });

//       gsap.set('.container', { autoAlpha: 1 });

//       function facesIn() {
//         const tl = gsap
//           .timeline({
//             defaults: {
//               scaleY: 1,
//               opacity: 0.9,
//               backgroundColor: midCol,
//               transformOrigin: 'center bottom',
//               duration: faceDuration,
//               ease: easing,
//               stagger: {
//                 each: staggerOffset,
//               },
//             },
//           })
//           .to('.face--back .face__panel', {})
//           .to('.face--right .face__panel', {}, 0)
//           .to('.face--bottom .face__panel', {}, 0)
//           .to('.face--top .face__panel', {}, 0.3)
//           .to('.face--left .face__panel', {}, 0.3)
//           .to('.face--front .face__panel', {}, 0.3);

//         return tl;
//       }

//       function facesOut() {
//         let tl = gsap
//           .timeline({
//             defaults: {
//               scaleY: 0,
//               opacity: 0,
//               backgroundColor: outCol,
//               transformOrigin: 'center top',
//               duration: faceDuration,
//               ease: easing,
//               stagger: {
//                 each: staggerOffset,
//               },
//             },
//           })
//           .to('.face--top .face__panel', {})
//           .to('.face--left .face__panel', {}, 0)
//           .to('.face--front .face__panel', {}, 0)
//           .to('.face--back .face__panel', {}, 0.3)
//           .to('.face--right .face__panel', {}, 0.3)
//           .to('.face--bottom .face__panel', {}, 0.3);

//         return tl;
//       }

//       gtl.add(facesIn()).add(facesOut(), '-=0.3').timeScale(1.1);
//     });
//     return {
//       isActive,
//     };
//   },
// });
</script>


