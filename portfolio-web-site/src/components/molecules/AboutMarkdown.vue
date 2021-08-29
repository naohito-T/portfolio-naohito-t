<template>
  <article class="markdown">
    <div class="markdown-wrap">
      <div class="markdown-wrap__left">
        <h2>Skill</h2>
      </div>
      <div class="markdown-wrap__right" v-html="skill"></div>
    </div>
    <div class="markdown-wrap">
      <div class="markdown-wrap__left">
        <h2>Promise</h2>
      </div>
      <div class="markdown-wrap__right" v-html="promise"></div>
    </div>
    <div class="markdown-wrap">
      <div class="markdown-wrap__left">
        <h2>Policy</h2>
      </div>
      <div class="markdown-wrap__right" v-html="policy"></div>
    </div>
    <div class="markdown-wrap">
      <div class="markdown-wrap__left">
        <h2>I am a...</h2>
      </div>
      <div class="markdown-wrap__right" v-html="iam"></div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import about from '@/assets/markdown/about.md';
import skill from '@/assets/markdown/skill.md';
import promise from '@/assets/markdown/promise.md';
import policy from '@/assets/markdown/policy.md';
import iam from '@/assets/markdown/iam.md';

export default defineComponent({
  setup() {
    return {
      about,
      skill,
      promise,
      policy,
      iam,
    }
  },
});
</script>
<style lang="scss">
.markdown {
  // visibility: visible;
  width: 100%;

  &-wrap {
    @include displayFlex(center, row, space-evenly);

    color: getcolor(--color-background, 1);
    margin-bottom: 9.375vw;

    &__left {
      font-size: $fontSize70;
      width: 20vw;
    }

    &__right {
      font-size: $fontSize18;
      width: 50vw;
    }
  }
}
</style>
