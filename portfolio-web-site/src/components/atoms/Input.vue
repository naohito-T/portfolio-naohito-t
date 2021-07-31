<template>
  <lable>
    <input type="text" v-model="userData.name"/>
  </lable>
</template>

<script lang="ts">
import { defineComponent,reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
  },
  components: {
  },
  setup(props) {
    const userDate = reactive<{userDate: string}>({ userDate: ''})
    return {
      userDate,
    }
  }
})

</script>

