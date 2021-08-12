import { IPhoto } from '../types/response/home';

export interface IRequestHomeAPI {
  /** JSON PlaceHolder */
  getPhoto(): Promise<IPhoto[]>;
}
