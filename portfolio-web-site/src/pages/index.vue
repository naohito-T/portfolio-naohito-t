<!-- 横スクロール場面 -->
<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, useContext, onMounted } from '@nuxtjs/composition-api'



// ここはenvの確認用

export default defineComponent({
    //   onMounted(() => {
    //   console.log(process.env.apiKey)
    //   console.log(process.env.authDomain)
    //   console.log(process.env.projectId)
    //   console.log(process.env.storageBucket)
    //   console.log(process.env.messagingSenderId)
    //   console.log(process.env.appId)
    //   console.log(process.env.measurementId)
    // }),
  setup() {
    const { app } = useContext();
    console.log(app.$stores.loading);
    console.log(JSON.stringify(app.$api.home.getPhoto()));
    onMounted(() => {
      console.log(process.env.apiBaseURL);
    })
  },


})
</script>

// <style lang="scss" scoped>

// </style>
