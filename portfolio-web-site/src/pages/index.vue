<template>
  <Tutorial />
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    onMounted(() => {
      console.log(process.env.apiKey)
      console.log(process.env.authDomain)
      console.log(process.env.projectId)
      console.log(process.env.storageBucket)
      console.log(process.env.messagingSenderId)
      console.log(process.env.appId)
      console.log(process.env.measurementId)
    })
  },
})
</script>

<style lang=""></style>
