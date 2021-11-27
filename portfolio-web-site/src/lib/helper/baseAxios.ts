import Axios, {
  // AxiosError,
  AxiosInstance,
  // AxiosRequestConfig,
  // AxiosResponse,
} from 'axios';

// const onFulfilled = (config: AxiosRequestConfig): AxiosRequestConfig => {};

/**
 * @description axiosのbase instanceを返す。
 * @returns {AxiosInstance}
 */
const baseAxios = (): AxiosInstance => {
  return Axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 1500,
  });
};
/**
 * @description axiosのbase instanceからinterceptorsで前処理をしたaxios instanceを返す
 * @returns {AxiosInstance}
 */
const ApiWithoutToken = (): AxiosInstance => {
  const axios = baseAxios();
  axios.interceptors.request.use();
  axios.interceptors.response.use();
  return axios;
};

export { ApiWithoutToken };
