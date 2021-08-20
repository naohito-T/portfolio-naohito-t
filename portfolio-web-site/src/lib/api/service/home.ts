import { IPhoto, ImageURL } from '../types/response/home';

export interface IRequestHomeAPI {
  /** JSON PlaceHolder */
  getPhoto(): Promise<IPhoto[]>;
  /** Unsplash Source */
  getImageURL(): Promise<ImageURL>;
}
