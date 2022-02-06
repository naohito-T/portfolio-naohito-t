/**
 * @desc 基本 env設定を集約させる箇所
 *       .vueファイルではなぜかnamespaceが認識されない。
 *
 */

export const firebaseSettings = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MESSAGING_SENDER_ID,
};

/**
 * firebaseの Storage Bucket name管理
 */
const pdfBucket = 'pdf';

/**
 * firebaseの Storage Bucket 内のファイル name管理
 */
const pdfFileName = 'skill_sheet.pdf';

/** bucket&filename */
export const PDF_BUCKET_WITH_FILE = `${pdfBucket}/${pdfFileName}`;

/**
 * firebaseの firestoreの管理
 */

export namespace StoreCollections {
  export const PROJECT = 'project';
}
