import { getModule } from 'vuex-module-decorators';
import { LoadingModule } from './loading';

export interface Stores {
  loading: LoadingModule;
}

const loading = getModule(LoadingModule);

const stores: Stores = {
  loading,
};

export { stores };
