//路由守卫
import axiosCancel from '@/utils/http/axiosCancel'
import { RouteLocationNormalized } from 'vue-router'
import store from '@/store'
export const afterEach = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    axiosCancel.clearPadding();
}
export const beforeEach = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) => {
    const role = to.meta.role as number[];
    console.log(role)
    if (!role) {
        next();
    }
    const storeRole = store.state.user.role;
    if (role.includes(storeRole)) {
        next();
    } else {
        next('403');
    }

}