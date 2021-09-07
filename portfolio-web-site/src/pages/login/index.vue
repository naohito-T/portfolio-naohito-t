<!-- header いれるかも 管理画面へのloginにする。 -->
<template>
  <LoginTemplate :enTitle="'Login'" :jaTitle="'管理者のみ'" />
</template>

<script lang="ts">
import { defineComponent, provide } from '@nuxtjs/composition-api';
import LoginTemplate from '@/components/template/LoginTemplate.vue';
/** Inject */
import { onClickForm } from '@/composables/repositories/form'
import { onClickFormKey } from '@/composables/repositories/key'

export default defineComponent({
  components: {
    LoginTemplate
  },
  setup() {
    /** state */

    /** provide provide(key, method) */
    provide(onClickFormKey, onClickForm());

    return {

    }
  },
})
</script>
