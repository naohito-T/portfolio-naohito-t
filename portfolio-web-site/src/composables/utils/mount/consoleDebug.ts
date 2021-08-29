/**
 * debug関連のコンソールをまとめたもの
 */

/**
 * @desc env関連のデバッグ
 *
 */
const envDebug = (): void => {
  console.log(`process.env.apiKey: ${process.env.apiKey}`);
  console.log(`process.env.authDomain: ${process.env.authDomain}`);
  console.log(`process.env.projectId: ${process.env.projectId}`);
  console.log(`process.env.storageBucket: ${process.env.storageBucket}`);
  console.log(
    `process.env.messagingSenderId: ${process.env.messagingSenderId}`
  );
  console.log(`process.env.appId: ${process.env.appId}`);
  console.log(`process.env.measurementId: ${process.env.measurementId}`);
  console.log(`process.env.apiBaseURL: ${process.env.apiBaseURL}`);
};

export { envDebug };
