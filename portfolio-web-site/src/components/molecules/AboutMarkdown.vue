<template>
  <article class="markdown">
    <div class="markdown-wrap">
      <div class="markdown-wrap__left">
        <h2>Skill</h2>
      </div>
      <div class="markdown-wrap__right">
        <p>hello</p>
      </div>
    </div>
    <div class="markdown-wrap">
      <div class="markdown-wrap__left">
        <h2>Skill</h2>
      </div>
      <div class="markdown-wrap__right">
        <p>hello</p>
      </div>
    </div>
    <div class="markdown-wrap">
      <div class="markdown-wrap__left">
        <h2>Skill</h2>
      </div>
      <div class="markdown-wrap__right">
        <p>hello</p>
      </div>
    </div>
    <div class="markdown-wrap">
      <div class="markdown-wrap__left">
        <h2>Skill</h2>
      </div>
      <div class="markdown-wrap__right">
        <p>hello</p>
      </div>
    </div>
    <div class="markdown-wrap">
      <div class="markdown-wrap__left">
        <h2>Skill</h2>
      </div>
      <div class="markdown-wrap__right">
        <p>hello</p>
      </div>
    </div>
    <div class="markdown-wrap">
      <div class="markdown-wrap__left">
        <h2>Skill</h2>
      </div>
      <div class="markdown-wrap__right">
        <p>hello</p>
      </div>
    </div>
    <div class="markdown-wrap">
      <div class="markdown-wrap__left">
        <h2>Skill</h2>
      </div>
      <div class="markdown-wrap__right">
        <p>hello</p>
      </div>
    </div>
    <div class="markdown-wrap">
      <div class="markdown-wrap__left">
        <h2>Skill</h2>
      </div>
      <div class="markdown-wrap__right">
        <p>hello</p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import about from '@/assets/markdown/about.md';

export default defineComponent({
  setup() {
    return {
      about
    }
  },
});
</script>
<style lang="scss">
.markdown {
  // visibility: visible;
  width: 100%;

  &-wrap {
    @include displayFlex(center, row, start);
  }
}
</style>
