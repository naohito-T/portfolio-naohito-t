<template>
  <!-- View -->
  <div style="margin-top: 50px">
    <CounterDisplay />
    <CounterIncrementButton />
    <CounterDecrementButton />
  </div>
</template>

<script lang="ts">
// 送信を親にset
import { defineComponent, provide } from '@nuxtjs/composition-api'
// 状態とロジックをimport
import { useCounter } from '@/composables/use-counter'
import CounterKey from '@/composables/use-counter-key'
// component
import CounterDisplay from '@/components/Counter/CounterDisplay.vue'
import CounterIncrementButton from '@/components/Counter/CounterIncrementButton.vue'
import CounterDecrementButton from '@/components/Counter/CounterDecrementButton.vue'

export default defineComponent({
  components: {
    CounterDisplay,
    CounterIncrementButton,
    CounterDecrementButton,
  },
  setup() {
    provide(CounterKey, useCounter()) // keyを付与してuseCounter()グループを運ぶ
    return {
    }
  },
})
</script>
