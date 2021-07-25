import { InjectionKey } from '@nuxtjs/composition-api'
import { UserStoreType } from '@/composables/stores/store/user-store'

const UserStoreKey: InjectionKey<UserStoreType> = Symbol('UserStore')
export default UserStoreKey
