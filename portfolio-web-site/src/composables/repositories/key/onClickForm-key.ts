import { InjectionKey } from '@nuxtjs/composition-api';
import { onClickFormType } from '@/composables/repositories/form';

export const onClickFormKey: InjectionKey<onClickFormType> =
  Symbol('onClickForm');
