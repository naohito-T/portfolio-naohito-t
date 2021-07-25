import Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'

// config
const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
}

// 初期化
export const firebase = Firebase.apps.length
  ? Firebase.app()
  : Firebase.initializeApp(config)

// namespace にしようかな→型であればnamespaceはよいが型ではないため使用しない。
export const auth = firebase.auth()
export const funtions = firebase.functions('asia-northeast1')
export const db = firebase.firestore()
// export const timestamp = () => firebase.firestore()
