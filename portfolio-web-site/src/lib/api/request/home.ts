import { IRequestHomeAPI } from '../service';
import { ImageURL, IPhoto } from '../types/response/home';
import { RequestAPI } from './api';

/**
 * @desc RequestAPI = axiosのインスタンス定義(抽象クラス)
 * @desc IRequestHomeAPI = methodsを定義したもの。
 */
export class RequestHomeAPI extends RequestAPI implements IRequestHomeAPI {
  /** photo */
  public getPhoto = async (): Promise<IPhoto[]> => {
    console.log(this.axios.getUri);
    return await this.axios
      .get<IPhoto[]>(`jsonplaceholder.typicode.com/photos`)
      .then((r) => r.data);
  };

  /** imageURL */
  public getImageURL = async (): Promise<ImageURL> => {
    console.log(this.axios.getUri);
    return await this.axios
      .get<ImageURL>(`source.unsplash.com/user/erondu/400x400`)
      .then((r) => r.data);
  };
}
