import user, { userState } from './mudules/user'
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
const store = createStore({
    modules: {
        user
    }
})
export default store
// 定义自己的 `useStore` 组合式函数
export type State = {
    user: userState
}
export const key: InjectionKey<Store<State>> = Symbol()
export function useStore() {
    return baseUseStore(key)
}