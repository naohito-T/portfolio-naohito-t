/**
 * debug関連のコンソールをまとめたもの
 */

/**
 * @desc env関連のデバッグ
 *
 */
const envJsFileDebug = (): void => {
  console.log(`(JS)process.env.apiKey: ${process.env.apiKey}`);
  console.log(`(JS)process.env.authDomain: ${process.env.authDomain}`);
  console.log(`(JS)process.env.projectId: ${process.env.projectId}`);
  console.log(`(JS)process.env.storageBucket: ${process.env.storageBucket}`);
  console.log(
    `(JS)process.env.messagingSenderId: ${process.env.messagingSenderId}`
  );
  console.log(`(JS)process.env.appId: ${process.env.appId}`);
  console.log(`(JS)process.env.measurementId: ${process.env.measurementId}`);
  console.log(`(JS)process.env.apiBaseURL: ${process.env.apiBaseURL}`);
};

const envDebug = (): void => {
  console.log(`process.env.apiKey: ${process.env.API_KEY}`);
  console.log(`process.env.authDomain: ${process.env.AUTH_DOMAIN}`);
  console.log(`process.env.projectId: ${process.env.PROJECTID}`);
  console.log(`process.env.storageBucket: ${process.env.STORAGE_BUCKET}`);
  console.log(
    `process.env.messagingSenderId: ${process.env.MESSAGING_SENDER_ID}`
  );
  console.log(`process.env.appId: ${process.env.APP_ID}`);
  console.log(`process.env.measurementId: ${process.env.MEASUREMENT_ID}`);
  console.log(`process.env.apiBaseURL: ${process.env.API_BASE_URL}`);
  console.log(`process.env.apiBASEJSONURL: ${process.env.API_BASE_JSON_URL}`);
  console.log(
    `process.env.API_BASE_IMAGE_URL : ${process.env.API_BASE_IMAGE_URL}`
  );
};

export { envJsFileDebug, envDebug };
