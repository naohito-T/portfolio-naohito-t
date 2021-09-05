<template>
  <WorkTemplate :enTitle="'WORK'" :jaTitle="'ワーク'"/>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import WorkTemplate from '@/components/template/WorkTemplate.vue';
export default defineComponent({
  components: {
    WorkTemplate,
  },
  setup() {
    return {}
  }
})
</script>
