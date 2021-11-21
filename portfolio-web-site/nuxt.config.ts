import { NuxtConfig } from '@nuxt/types';

const EXE_ENV = process.env.NODE_ENV ?? 'local';
const ENV_FILE_PATH = `./env/decrypt/.env.${EXE_ENV}`;
require('dotenv').config({ path: ENV_FILE_PATH });

const nuxtConfig: NuxtConfig = {
  // move directory to src
  srcDir: 'src/',
  globalName: 'naohito-t-portfolio',
  env: {
    API_KEY: process.env.API_KEY ?? 'none',
    AUTH_DOMAIN: process.env.AUTH_DOMAIN ?? 'none',
    PROJECTID: process.env.PROJECTID ?? 'none',
    STORAGE_BUCKET: process.env.STORAGE_BUCKET ?? 'none',
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID ?? 'none',
    APP_ID: process.env.APP_ID ?? 'none',
    MEASUREMENT_ID: process.env.MEASUREMENT_ID ?? 'none',
    // # api
    API_BASE_URL: process.env.API_BASE_URL ?? 'none',
    API_BASE_JSON_URL: process.env.API_BASE_JSON_URL ?? 'none',
    // # api Image URL 400x400
    API_BASE_IMAGE_URL: process.env.API_BASE_IMAGE_URL ?? 'none',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      EXE_ENV === 'pro' ? 'portfolio-web-site' : '【開発】portfolio-web-site',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/sass/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  /**
   * SPAが呼び出された時点でfirebaseを読み込む
   */
  plugins: [
    { src: '@/plugins/stores' },
    { src: '@/plugins/api' },
    { src: '@/plugins/firebase' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    'nuxt-svg-loader',
  ],
  dotenv: {
    // path: `${process.cwd()}/env/decrypt/`,
    filename: ENV_FILE_PATH,
  },
  axios: {
    baseURL: process.env.BASE_URL,
  },
  styleResources: {
    scss: [
      '@/assets/sass/_variables.scss',
      '@/assets/sass/_mixin.scss',
      '@/assets/sass/_function.scss',
      '@/assets/sass/_loading.scss',
      '@/assets/sass/markdown.scss',
    ],
  },
  // markdown 用 settings
  markdownit: {
    injected: true,
    breaks: true,
    html: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};

export default nuxtConfig;
