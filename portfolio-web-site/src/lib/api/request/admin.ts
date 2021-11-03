// import { AxiosResponse } from 'axios';
import { IRequestAdminAPI } from '../service';
import { firestore } from '../../../plugins/firebase';
import { RequestAPI } from './api';
import { StoreCollections } from '../../../settings/settings';

/** firebase adminで
 * @see https://www.memory-lovers.blog/entry/2020/03/20/110000
 */

export class RequestAdminAPI extends RequestAPI implements IRequestAdminAPI {
  /**
   * @desc firestoreにdocumentを新規作成
   */
  public registerProjectDetetail = async (
    param: ProjectDetail
  ): Promise<void> => {
    /** まずは参照を作る */
    const storeRef = await firestore.collection(StoreCollections.PROJECT);
  };
  /**
   * @desc firestoreの既存docを更新
   */
}
