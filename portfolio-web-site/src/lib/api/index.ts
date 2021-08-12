import { IRequestHomeAPI } from './service';
import { RequestHomeAPI } from './request';
import { ApiWithoutToken } from './helper/baseAxios';

export interface API {
  home: IRequestHomeAPI;
}

const home = new RequestHomeAPI(ApiWithoutToken());

export const api: API = {
  home,
};
