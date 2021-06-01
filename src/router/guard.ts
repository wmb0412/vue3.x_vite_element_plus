//路由守卫
import axiosCancel from '@/utils/http/axiosCancel'
import { RouteLocationNormalized } from 'vue-router'
export const afterEach = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    axiosCancel.clearPadding();
}
export const beforeEach = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) => {
    next();
}