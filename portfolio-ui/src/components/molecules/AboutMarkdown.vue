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
import skill from '@/assets/markdown/about/Skill.md';
import promise from '@/assets/markdown/about/promise.md';
import policy from '@/assets/markdown/about/policy.md';
import iam from '@/assets/markdown/about/iam.md';

export default defineComponent({
  setup() {
    return {
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

      p:nth-child(1) {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
