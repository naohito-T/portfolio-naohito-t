import { IPhoto, ImageURL, ProjectDetail } from '../types/response/home';

/**
 * @desc ここを分離しても他のプロジェクトで機能するように意識しろ
 */
export interface IRequestHomeAPI {
  /** JSON PlaceHolder */
  fetchPhoto(): Promise<IPhoto[]>;
  /** Unsplash Source */
  fetchImageURL(): Promise<ImageURL>;
  /** ここまではdebug */
  /** project 1個とってくる */
  fetchProjectDetail(collection: string, docId: string): Promise<void>;
  fetchProjectDetailList(collection: string): Promise<ProjectDetail[]>;
  /** 単一のURLを取得 */
  fetchFileUrl(target: string): Promise<string>;
  /** 複数の画像URLを取得 */
  fetchFileUrls(target: string): Promise<ImageURL[]>;
  /** pdfを取得 */
  fetchPdf(): Promise<Blob>;
}
