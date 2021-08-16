<template>
  <div class="markdown" v-html="about"></div>
</template>

<script lang="ts">
import {defineComponent } from '@nuxtjs/composition-api';
import about from '@/assets/markdown/about.md';

export default defineComponent({
  setup() {
    return {
      about,
    };
  },
});

</script>
