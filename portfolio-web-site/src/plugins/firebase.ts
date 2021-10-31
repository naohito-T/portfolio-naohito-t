import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

// config
import { firebaseSettings } from '../settings/settings';

// 初期化
export const firebase = Firebase.apps.length
  ? Firebase.app()
  : Firebase.initializeApp(firebaseSettings);

const auth = firebase.auth();
const funtions = firebase.functions('asia-northeast1');
const db = firebase.firestore();
/** firebase storageは画像ファイルパスは変換することができるため画像のファイルパスを格納しなくていい。 */
const storage = firebase.storage();

export { auth, funtions, db, storage };
