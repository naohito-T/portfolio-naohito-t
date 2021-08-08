import { NuxtConfig } from '@nuxt/types'

const environment = process.env.NODE_ENV
const envSettings = require(`./env/decrypt/env.${environment}.js`)

const nuxtConfig: NuxtConfig = {
  // move directory to src
  srcDir: 'src/',
  globalName: 'naohito-t-portfolio',
  // env 設定をしないとNuxtでprocess.env.NODE_ENVを取得したときにデフォルトの値になってしまう(develop)
  // env: envSet,
  env: envSettings,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      process.env.NODE_ENV === 'pro'
        ? 'portfolio-web-site'
        : '【開発】portfolio-web-site',
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
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
  ],

  styleResources: {
    scss: ['@/assets/sass/_variables.scss', '@/assets/sass/_mixin.scss'],
  },

  markdownit: {
    injected: true,
    breaks: true,
    html: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

export default nuxtConfig
