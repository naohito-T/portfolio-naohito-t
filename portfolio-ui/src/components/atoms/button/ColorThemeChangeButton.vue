<template>
    <div class="theme">
      <!-- <p @click="colorSchemeChange">{{ message }}</p> -->
      <p @click="colorSchemeChange">dark</p>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const isMedia = ref(false); // prefers true = dark , false = white
    const message = ref('');
    // localStoreagに入れないといけない
    // cssの変更はmediaでscss担当
    // リロードしたらlocalStorageの値でmediaを変更
    onMounted(() => {
      // userが選択したもの
      const userTheme = localStorage.getItem('data-theme');
      console.log(`userTheme :${userTheme}`);
      // dark true
      isMedia.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const mediaTheme = isMedia.value ? 'dark' : 'white';
      localStorage.setItem('data-theme', userTheme ?? mediaTheme);
      document.documentElement.setAttribute("data-theme", userTheme ?? mediaTheme)
    });

    // localStorageの値とscssが展開した値を変更
    const colorSchemeChange = () => {
      const userThema = localStorage.getItem('data-theme');
      // const user = userThema === 'dark' ? 'light' : 'dark';
      const user = userThema === 'dark' ? 'light' : 'dark';
      message.value = userThema === 'dark' ? 'light' : 'dark';
      localStorage.setItem('data-theme', user);
      document.documentElement.setAttribute("data-theme", user);
    };

    return {
      message,
      colorSchemeChange
    }
  },
})
</script>
<style lang="scss" scoped>
.theme {
  color: #fff;
}
</style>
