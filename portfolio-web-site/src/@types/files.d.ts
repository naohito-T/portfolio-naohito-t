import Vue from 'vue';

declare module '*.svg' {
  const data: Vue;
  export default data;
}
