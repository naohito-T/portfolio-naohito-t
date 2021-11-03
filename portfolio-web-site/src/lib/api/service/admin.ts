import { ProjectDetail } from '../types/response/home';
/**
 * @desc ここを分離しても他のプロジェクトで機能するように意識しろ
 */

export interface IRequestAdminAPI {
  /** docを追加 */
  registerProjectDetetail(param: ProjectDetail): Promise<void>;
}
