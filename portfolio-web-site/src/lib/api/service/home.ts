import { IPhoto, ImageURL } from '../types/response/home';

export interface IRequestHomeAPI {
  /** JSON PlaceHolder */
  getPhoto(): Promise<IPhoto[]>;
  /** Unsplash Source */
  getImageURL(): Promise<ImageURL>;
  /** 単一のURLを取得 */
  getImage(target: string): Promise<string>;
  /** 複数の画像URLを取得 */
  getImageURLs(target: string): Promise<ImageURL[]>;
}
