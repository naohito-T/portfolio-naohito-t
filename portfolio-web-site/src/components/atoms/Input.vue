<template>
  <lable>
    <input v-model="userData.name" type="text"/>
  </lable>
</template>

<script lang="ts">
import { defineComponent,reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  components: {
  },
  props: {
  },
  setup() {
    const userDate = reactive<{userDate: string}>({ userDate: ''})
    return {
      userDate,
    }
  }
})

</script>

