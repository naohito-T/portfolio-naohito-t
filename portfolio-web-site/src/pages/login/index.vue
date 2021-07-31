<!-- header いれるかも -->
<template>
  <main class="contents">
    <section class="section1">
      <p>hello</p>
    </section>
    <section class="section2">

    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({

})
</script>

<style lang="scss" scoped>
.contents {
  .section1 {
    @include inner()

  }
}

</style>
