import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

// config
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MESSAGING_SENDER_ID,
};

// 初期化
export const firebase = Firebase.apps.length
  ? Firebase.app()
  : Firebase.initializeApp(config);

// namespace にしようかな→型であればnamespaceはよいが型ではないため使用しない。
const auth = firebase.auth();
const funtions = firebase.functions('asia-northeast1');
const db = firebase.firestore();

export { auth, funtions, db };
