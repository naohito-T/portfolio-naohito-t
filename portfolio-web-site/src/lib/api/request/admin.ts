// import { AxiosResponse } from 'axios';
import { IRequestAdminAPI } from '../service';
import { firestore } from '../../../plugins/firebase';
import { StoreCollections } from '../../../settings/settings';
import { ProjectDetail } from '../types/response/admin';
import { RequestAPI } from './api';

/** firebase adminで
 * @see https://www.memory-lovers.blog/entry/2020/03/20/110000
 */

export class RequestAdminAPI extends RequestAPI implements IRequestAdminAPI {
  /**
   * @desc firestoreにdocumentを新規作成 add()がランダムなIDを割り当てて作成する setが一意なID
   */
  public registerProjectDetail = async (
    param: ProjectDetail
  ): Promise<void> => {
    /** まずは参照を作る */
    const proRef = firestore.collection(StoreCollections.PROJECT);
    await proRef.add(param).catch((e) => console.warn(e));
  };

  /**
   * @desc firestoreの既存docを更新
   */
}
