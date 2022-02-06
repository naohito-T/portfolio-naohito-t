import Vue from 'vue';

declare module '*.svg' {
  const data: Vue;
  export default data;
}
declare module '*.gif' {
  const data: string;
  export default data;
}
declare module '*.png' {
  const data: string;
  export default data;
}
declare module '*.jpg' {
  const data: string;
  export default data;
}
declare module '*.webp' {
  const data: string;
  export default data;
}
declare module '*.md' {
  const data: string;
  export default data;
}
