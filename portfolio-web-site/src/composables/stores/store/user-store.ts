import { reactive } from '@nuxtjs/composition-api'
import firebase from 'firebase'
import { db } from '@/plugins/firebase'

interface User {
  id: string
  email: string
  name: string
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
  })
  // get user
  const GetUserStore = () => state
  // set user
  const SetUserStore = (user: firebase.User) => {
    console.log('Login Information', user)
    const userRef = db.collection('users').doc(user.uid)
    userRef.onSnapshot((doc) => {
      if (doc.exists) {
        console.log('user contact_info from DB', doc.data()!.contact_info)
        const parsedUserInfo = {
          id: doc.id,
          email: user.email,
          name: doc.data()!.name, // 危険
        }

        // state = parsedUserInfo
        console.log('complete on state', GetUserStore())
      } else {
        console.log('No User Data')
      }
    })
  }
  return { SetUserStore, GetUserStore }
}

export type UserStoreType = ReturnType<typeof UserStore>
