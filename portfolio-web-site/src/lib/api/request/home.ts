// import firebase from 'firebase';
import { IRequestHomeAPI } from '../service';
import { ImageURL, IPhoto } from '../types/response/home';
import { storage } from '../../../plugins/firebase';
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

  public getImage = async (targetImageURL: string): Promise<string> => {
    const storageRef = storage.ref();
    return await storageRef
      .child(targetImageURL)
      .getDownloadURL()
      .then((url: string) => {
        return url;
      });
  };

  /**
   * 特定のディレクトリの画像URL全てを取得
   */
  public getImageURLs = async (target: string): Promise<ImageURL[]> => {
    const storageRef = storage.ref(target);
    const listRef = await storageRef.listAll();
    const imageURLs: ImageURL[] = await Promise.all(
      listRef.items.map(async (ref) => {
        const c = await ref.getDownloadURL();
        return c;
      })
    );
    console.log(imageURLs);
    return imageURLs;
  };
}
