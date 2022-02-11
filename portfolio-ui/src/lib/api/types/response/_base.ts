import firebase from 'firebase';

export interface BaseProperty {
  id: number;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
}
