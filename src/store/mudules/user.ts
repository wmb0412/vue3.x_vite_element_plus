import { Store, ActionContext } from 'vuex'
import { State } from '../index'
// 为 store state 声明类型
export interface userState {
    count: number
}
const user = {
    namespaced: true,
    state: () => ({
        count: 2
    }),
    mutations: {
        increment(state: userState) {
            console.log('increment')
            state.count++
        }
    },
    getters: {
        doubleCount(state: userState) {
            return state.count * 2
        },
    },
    actions: {
        incrementAsync({ commit }: ActionContext<userState, State>) {
            setTimeout(() => {
                commit('increment')
            }, 1000)
        }
    }
}
export default user