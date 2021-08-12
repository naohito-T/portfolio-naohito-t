import { IRequestHomeAPI } from '../service';
import { IPhoto } from '../types/response/home';
import { RequestAPI } from './api';

/**
 * @desc RequestAPI = axiosのインスタンス定義(抽象クラス)
 * @desc IRequestHomeAPI = methodsを定義したもの。
 */
export class RequestHomeAPI extends RequestAPI implements IRequestHomeAPI {
  public getPhoto = async (): Promise<IPhoto[]> => {
    console.log(this.axios.getUri);
    return await this.axios.get<IPhoto[]>(`/photos`).then((r) => r.data);
  };
}
