<template>
  <div class="horizontal">
    <ul class="horizontal-list">
      <nuxt-link :to="ankerLink">
        <li class="horizontal-list__item">
          <img/>
          <p>Title</p>
          <p>subTitle</p>
        </li>
      </nuxt-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    ankerLink: {
      type: String,
      default: '/'
    },
    imgURL: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    }
  },
  setup() {

  },
})
</script>

<style lang="scss" scoped>
.horizontal {
  &-list {
    overflow-x: auto;
    white-space: nowrap;

    &__item {
      display: inline-block;
      height: 400px;
      margin: 16px;
      width: 60%;
    }
  }
}
</style>
