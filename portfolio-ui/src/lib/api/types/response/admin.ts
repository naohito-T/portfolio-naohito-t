import firebase from 'firebase';

interface ProjectDetail {
  title: string;
  subTitle: string;
  imgURL: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
}

export { ProjectDetail };
