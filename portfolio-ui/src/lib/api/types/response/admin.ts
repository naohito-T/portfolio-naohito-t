import firebase from 'firebase';

/** Adminのみで使用するか？ */
// interface User {}

interface ProjectDetail {
  title: string;
  subTitle: string;
  imgURL: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
}

export { ProjectDetail };
