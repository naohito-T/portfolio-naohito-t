<!-- header いれるかも 管理画面へのloginにする。 -->
<template>
  <LoginTemplate :enTitle="'Login'" :jaTitle="'管理者のみ'"/>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
// import Title from '@/components/common/Title.vue';
import LoginTemplate from '@/components/template/LoginTemplate.vue';

export default defineComponent({
  components: {
    LoginTemplate
  },
  setup() {},
})
</script>
