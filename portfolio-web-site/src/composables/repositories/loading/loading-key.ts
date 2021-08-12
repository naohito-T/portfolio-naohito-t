import { InjectionKey } from '@nuxtjs/composition-api'
import { LoadingType } from '@/composables/repositories/loading/loading'

const LoadingKey: InjectionKey<LoadingType> = Symbol('LoadingStore')
export default LoadingKey
