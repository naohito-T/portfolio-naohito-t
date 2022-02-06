import { Plugin } from '@nuxt/types';
import { stores } from '@/store/module';

const plugin: Plugin = (_, inject) => {
  inject('stores', stores);
};

export default plugin;
