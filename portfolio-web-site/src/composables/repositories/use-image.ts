import { reactive } from '@nuxtjs/composition-api';

export const useImage = () => {
  // state
  const state = reactive<{
    ankerLink: string;
    imgURL: string;
    title: string;
    subTitle: string;
  }>({
    ankerLink: '',
    imgURL:
      process.env.API_BASE_IMAGE_URL ??
      'https://source.unsplash.com/user/erondu/400x400',
    title: 'hello',
    subTitle: 'sbutitle',
  });

  // ロジック
  const getImage = () => {
    return state;
  };

  return {
    state,
    getImage,
  };
};

export type ImageStore = ReturnType<typeof useImage>;
