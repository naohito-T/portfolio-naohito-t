<template>
  <div>
    <h2>Eight images, with 80px gap</h2>
    <div class="carousel" data-gap="80">
      <figure>
        <img src="https://source.unsplash.com/VkwRmha1_tI/800x533" alt="" />
        <img src="https://source.unsplash.com/EbuaKnSm8Zw/800x533" alt="" />
        <img src="https://source.unsplash.com/kG38b7CFzTY/800x533" alt="" />
        <img src="https://source.unsplash.com/nvzvOPQW0gc/800x533" alt="" />
        <img src="https://source.unsplash.com/mCg0ZgD7BgU/800x533" alt="" />
        <img src="https://source.unsplash.com/1FWICvPQdkY/800x533" alt="" />
        <img src="https://source.unsplash.com/bjhrzvzZeq4/800x533" alt="" />
        <img src="https://source.unsplash.com/7mUXaBBrhoA/800x533" alt="" />
      </figure>
      <nav>
        <button class="nav prev">Prev</button>
        <button class="nav next">Next</button>
      </nav>
    </div>
    <div class="text">
      <p></p>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * textと
 * 画像一覧をfirebaseから取得
 */
import { defineComponent, useContext } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { route } = useContext();
    const path = route.value.path;
    console.log(path);
    window.addEventListener('load', () => {
      const carousels = document.querySelectorAll('.carousel'); // carousel
      for (let i = 0; i < carousels.length; i++) {
        carousel(carousels[i]);
      }
    });
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
}

.carousel > * {
  flex: 0 0 auto;
}

.carousel figure {
  margin: 0;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  width: 40%;
}

.carousel figure img {
  box-sizing: border-box;
  padding: 0;
  width: 100%;
}

.carousel figure img:not(:first-of-type) {
  left: 0;
  position: absolute;
  top: 0;
}

.carousel nav {
  display: flex;
  justify-content: center;
  margin: 20px 0 0;
}

.carousel nav button {
  background: none;
  border: 1px solid;
  color: #333;
  cursor: pointer;
  flex: 0 0 auto;
  letter-spacing: 1px;
  margin: 0 5px;
  padding: 5px 10px;
}
</style>
