<template>
  <div>
    <section class="section1">
      <Title :en-title="enTitle" :ja-title="jaTitle" />
    </section>
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
  onUnmounted,
} from '@nuxtjs/composition-api';
/** component */
import Title from '@/components/common/Title.vue';
/** util */
import { carousel } from '@/composables/utils/carousel';

export default defineComponent({
  components: {
    Title,
  },
  props: {
    enTitle: {
      type: String,
      required: true,
    },
    jaTitle: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { route } = useContext();
    const path = route.value.path;
    console.log(`pathを取得: ${path}`);

    const callCarouesl = () => {
      const carousels = document.querySelectorAll('.carousel'); // carousel
      for (let i = 0; i < carousels.length; i++) {
        carousel(carousels[i] as HTMLElement);
      }
    };

    onMounted(() => {
      addEventListener('load', callCarouesl);
    });

    onUnmounted(() => {
      removeEventListener('load', callCarouesl);
    });

    return {};
  },
});
</script>

<style lang="scss" scoped>
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
