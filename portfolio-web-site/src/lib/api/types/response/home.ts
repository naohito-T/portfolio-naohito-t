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

/** これはtopで使うべきか */
interface ProjectDetail {
  docId: string;
  title: string;
  subTitle: string;
  imgURL: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
}

interface User {
  name: string;
  photoURL: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
}

export { User, IPhoto, ImageURL, ImageURLs, ProjectDetail };
