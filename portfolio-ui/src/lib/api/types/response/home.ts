import firebase from 'firebase';

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface ImageURL {
  imageUrl: string;
}

interface ImageURLs {
  downloadURLs: string[];
}

/** 配列でProject一覧で使用 */
interface Projects {
  docId: string;
  title: string;
  subTitle: string;
  imgURL: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
}

/** works/_slugで使用する */
interface ProjectDetail {
  docId: string;
  title: string;
  subTitle: string;
  imgURL: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
}

/** これはいらんだろう(admin)使用で */
interface User {
  name: string;
  photoURL: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
}

export { User, IPhoto, ImageURL, ImageURLs, Projects, ProjectDetail };
