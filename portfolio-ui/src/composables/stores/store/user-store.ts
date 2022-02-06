import { reactive } from '@nuxtjs/composition-api';
import firebase from 'firebase';
import { firestore } from '@/plugins/firebase';

interface User {
  id: string;
  email: string;
  name: string;
}

/**
 *
 * @returns
 * 参考
 * https://qiita.com/Takabun/items/e0b0c139ccf53c7bb561
 */

export const UserStore = () => {
  const state = reactive<User>({
    id: '',
    email: '',
    name: '',
  });
  // get user
  const getUser = () => state;
  // set user
  const setUser = (user: firebase.User) => {
    console.log('Login Information', user);
    const userRef = firestore.collection('users').doc(user.uid);
    userRef.onSnapshot((doc) => {
      if (doc.exists) {
        console.log('user contact_info from DB', doc.data()!.contact_info);
        const parsedUserInfo = {
          id: doc.id,
          email: user.email,
          name: doc.data()!.name, // 危険
        };

        console.log(parsedUserInfo);

        // state = parsedUserInfo
        console.log('complete on state', getUser());
      } else {
        console.log('No User Data');
      }
    });
  };
  return { setUser, getUser };
};

export type UserStoreType = ReturnType<typeof UserStore>;
