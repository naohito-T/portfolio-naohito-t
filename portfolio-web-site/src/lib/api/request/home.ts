// import firebase from 'firebase';
import { AxiosResponse } from 'axios';
import { IRequestHomeAPI } from '../service';
import { ImageURL, IPhoto } from '../types/response/home';
import { storage } from '../../../plugins/firebase';
import { PDF_BUCKET_WITH_FILE } from '../../../settings/settings';
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

  /**
   * @desc storageRef.getDownloadURL()で得られたurl(item.url)は、
   *       storageのファイルへの参照であり、ファイルの実体を指し示すものではないようです。
   */
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
   * @desc 特定のディレクトリの画像URL全てを取得
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

  /**
   * @desc pdfを取得
   */
  public getPdf = async (): Promise<Blob> => {
    const storageRef = storage.ref(PDF_BUCKET_WITH_FILE); // 参照を作成
    const url: string = await storageRef.getDownloadURL();
    return await this.axios.get(url).then((r: AxiosResponse<Blob>) => r.data);
  };
}
