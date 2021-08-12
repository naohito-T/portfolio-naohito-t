module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript', // @typescript-eslintをベースにしている
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    // 適用した意味 URL:https://dev.appswingby.com/typescript/nuxt-js%E3%81%A7%E5%B0%8E%E5%85%A5%E3%81%97%E3%81%A6%E3%81%84%E3%82%8Bnuxtjs-eslint-config-typescript%E3%81%A7no-useless-constructor%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%8C%E8%A1%A8%E7%A4%BA%E3%81%95/
    'no-useless-constructor': 'off',
  },
};
