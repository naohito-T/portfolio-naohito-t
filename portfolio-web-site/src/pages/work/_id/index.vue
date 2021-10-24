<template>
  <div>
    <h2>Eight images, with 80px gap</h2>
    <div class="carousel" data-gap="80">
      <figure class="carousel-figure">
        <img
          src="https://source.unsplash.com/VkwRmha1_tI/800x533"
          alt=""
          class="carousel-figure__img"
        />
        <img
          src="https://source.unsplash.com/EbuaKnSm8Zw/800x533"
          alt=""
          class="carousel-figure__img"
        />
        <img
          src="https://source.unsplash.com/kG38b7CFzTY/800x533"
          alt=""
          class="carousel-figure__img"
        />
        <img
          src="https://source.unsplash.com/nvzvOPQW0gc/800x533"
          alt=""
          class="carousel-figure__img"
        />
        <img
          src="https://source.unsplash.com/mCg0ZgD7BgU/800x533"
          alt=""
          class="carousel-figure__img"
        />
        <img
          src="https://source.unsplash.com/1FWICvPQdkY/800x533"
          alt=""
          class="carousel-figure__img"
        />
        <img
          src="https://source.unsplash.com/bjhrzvzZeq4/800x533"
          alt=""
          class="carousel-figure__img"
        />
        <img
          src="https://source.unsplash.com/7mUXaBBrhoA/800x533"
          alt=""
          class="carousel-figure__img"
        />
      </figure>
      <nav class="carousel-nav">
        <button class="carousel-nav__button prev">Prev</button>
        <button class="carousel-nav__button next">Next</button>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * textと
 * 画像一覧をfirebaseから取得
 */
import {
  defineComponent,
  useContext,
  onMounted,
} from '@nuxtjs/composition-api';
// import { carousel } from '@/composables/utils/carousel';

export default defineComponent({
  setup() {
    const { route } = useContext();
    const path = route.value.path;
    console.log(path);

    onMounted(() => {
      window.addEventListener('load', () => {
        const carousels = document.querySelectorAll('.carousel'); // carousel
        console.log(carousels);
        console.log(carousels.length);

        const carousel = (root: any) => {
          /** figureを取り出す */
          const figure = root.querySelector('figure');
          /** nav(button)を取り出す */
          const nav = root.querySelector('nav');
          /** figureの子要素(imageを取得)  */
          const images = figure?.children;
          /** figureの子要素のimageの個数を取得 */
          const n: number = images?.length ?? 0;
          /** data-gapを取り出す(読み取り書き込みで) */
          const gap = root.dataset.gap || 0;
          /** data-gapにdata-bfcがsetされているか? true */
          const bfc = 'bfc' in root.dataset;
          /**  */
          const theta = (2 * Math.PI) / n;
          /** imageのindex */
          const currentImage = 0;

          window.addEventListener('resize', () => {
            setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
          });

          const setupCarousel = (n: number, s: number) => {
            const apothem = s / (2 * Math.tan(Math.PI / n));
            figure.style.transformOrigin = `50% 50% ${-apothem}px`;

            for (let i = 0; i < n; i++) {
              images[i].style.padding = `${gap}px`;
            }

            for (let i = 1; i < n; i++) {
              images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
              images[i].style.transform = `rotateY(${i * theta}rad)`;
            }

            if (bfc)
              for (let i = 0; i < n; i++)
                images[i].style.backfaceVisibility = 'hidden';

            rotateCarousel(currentImage);
          };

          /**
           * @desc carouselを回す
           * @param imageIndex
           */
          const rotateCarousel = (imageIndex: number) => {
            figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
          };

          const setupNavigation = (nav: any, imgIndex: number) => {
            const onClick = (e: any) => {
              e.stopPropagation();

              const t = e.target;
              if (t.tagName.toUpperCase() !== 'BUTTON') return;

              if (t.classList.contains('next')) {
                imgIndex++;
              } else {
                imgIndex--;
              }

              rotateCarousel(imgIndex);
            };

            nav.addEventListener('click', onClick, true);
          };
          setupNavigation(nav, currentImage);
          setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
        };

        for (let i = 0; i < carousels.length; i++) {
          carousel(carousels[i]);
        }
      });
    });
  },
});
</script>

<style lang="scss" scoped>
// @use 'sass:math';

h2 {
  color: #555;
  margin-bottom: 0;
  text-align: center;
}

.carousel {
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
  perspective: 500px;

  &-figure {
    margin: 0;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    width: 40%;

    &__img {
      box-sizing: border-box;
      padding: 0;
      width: 100%;
    }

    &__img:not(:first-of-type) {
      left: 0;
      position: absolute;
      top: 0;
    }
  }

  &-nav {
    display: flex;
    justify-content: center;
    margin: 20px 0 0;

    &__button {
      background: none;
      border: 1px solid;
      color: #333;
      cursor: pointer;
      flex: 0 0 auto;
      letter-spacing: 1px;
      margin: 0 5px;
      padding: 5px 10px;
    }
  }
}

.carousel > * {
  flex: 0 0 auto;
}

// .carousel figure img:not(:first-of-type) {
//   left: 0;
//   position: absolute;
//   top: 0;
// }
</style>
