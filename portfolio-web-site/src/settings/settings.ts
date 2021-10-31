/**
 * @description 基本 env設定を集約させる箇所
 *
 */

const firebaseSettings = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MESSAGING_SENDER_ID,
};

/** firebase bucket name */
const pdfBucket = 'pdf';

/** filename */
const pdfFileName = 'gyfu_page1_new_redaction.pdf';

/** bucket&filename */
const PDF_BUCKET_WITH_FILE = `${pdfBucket}/${pdfFileName}`;

export { firebaseSettings, PDF_BUCKET_WITH_FILE };
