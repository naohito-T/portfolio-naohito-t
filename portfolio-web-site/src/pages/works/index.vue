<template>
  <WorksTemplate :en-title="'WORK'" :ja-title="'ワーク'" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import WorksTemplate from '@/components/template/WorksTemplate.vue';
export default defineComponent({
  components: {
    WorksTemplate,
  },
  setup() {
    return {};
  },
});
</script>
