import {
  defineComponent,
  h,
  ref,
  SetupContext,
  provide,
} from '@nuxtjs/composition-api'
import LoadingKey from './loading-key'

export const useLoading = () => {
  const isLoading = ref<boolean>(false)

  const setIsLoading = (loading: boolean) => {
    isLoading.value = loading
  }

  return {
    isLoading,
    setIsLoading,
  }
}
// 型情報追加
export type LoadingType = ReturnType<typeof useLoading>

export default defineComponent({
  setup(_, context: SetupContext) {
    provide(LoadingKey, useLoading())
    const childNode = context.slots.default

    return () => h('div', { class: 'app-provider' }, childNode!())
  },
})
