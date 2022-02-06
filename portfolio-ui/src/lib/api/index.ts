import { ApiWithoutToken } from '../helper/baseAxios';
import { IRequestHomeAPI } from './service';
import { RequestHomeAPI } from './request';

export interface API {
  home: IRequestHomeAPI;
}

const home = new RequestHomeAPI(ApiWithoutToken());

export const api: API = {
  home,
};
