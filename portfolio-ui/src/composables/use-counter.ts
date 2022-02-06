import { reactive } from '@vue/composition-api'
// export のみの場合は{}を使用してimportする。
export const useCounter = () => {
  // state = 状態
  const state = reactive<{ count: number }>({
    count: 0,
  })
  // ロジック
  const increment = () => state.count++
  const decrement = () => state.count--

  return {
    state,
    increment,
    decrement,
  }
}

// 型情報追加
export type CounterStore = ReturnType<typeof useCounter>
