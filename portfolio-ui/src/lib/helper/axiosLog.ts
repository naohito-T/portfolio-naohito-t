import { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * @desc requestのlogをconsole上に書き出す。
 * @param {AxiosRequestConfig} req
 * @returns {AxiosRequestConfig}
 */
const writeReqLog = (req: AxiosRequestConfig): AxiosRequestConfig => {
  if (process.server) {
    console.log({
      msg: 'api request',
      url: req.url,
      method: req.method,
      headers: req.headers,
      body: req.data,
    });
  }
  return req;
};
/**
 * @desc responseのlogをconsole上に書き出す。
 * @param {AxiosResponse} res
 * @returns {AxiosResponse}
 */
const writeResLog = (res: AxiosResponse): AxiosResponse => {
  if (process.server) {
    console.log({
      msg: 'api response',
      url: res.config.url,
      method: res.request?.method,
      status: res.status,
      headers: res.headers,
      body: res.data,
    });
  }
  return res;
};

export { writeReqLog, writeResLog };
