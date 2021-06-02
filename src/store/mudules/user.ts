import { Store, ActionContext } from 'vuex'
// import { useRouter } from "vue-router";
import router from '@/router/index'
import { login } from "@/api/login";

import { State } from '../index'
// 为 store state 声明类型
export interface userState {
    role: number
    count: number
}
interface loginForm {
    userName: string;
    passWord: string;
    role: number
}
const user = {
    namespaced: true,
    state: () => ({
        count: 2,
        role: 0
    }),
    mutations: {
        increment(state: userState) {
            console.log('increment')
            state.count++
        },
        setRole(state: userState, playload: number) {
            state.role = playload
        }
    },
    getters: {
        doubleCount(state: userState) {
            return state.count * 2
        },
        getRoleName(state: userState) {
            return state.role == 0 ? '游客' : '管理员'
        }
    },
    actions: {
        async login({ commit }: ActionContext<userState, State>, { userName, passWord, role }: loginForm) {
            console.log('router', router)
            const res = await login({
                passWord: passWord,
                userName: userName,
            });
            if (!res.code) {
                commit('setRole', role)
                router.push({
                    path: "/home",
                });
            }

        },
        incrementAsync({ commit }: ActionContext<userState, State>) {
            setTimeout(() => {
                commit('increment')
            }, 1000)
        }
    }
}
export default user