import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import { afterEach, beforeEach } from './guard'
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        meta: {

        }
    },
    {
        path: '/',
        component: () => import('@/layouts/index.vue'),
        meta: {

        },
        children: [{
            path: '/home',
            component: () => import('@/views/home/index.vue'),
            meta: {
            },
        }, {
            path: '/power',
            component: () => import('@/views/power/index.vue'),
            meta: {
                role: [1]
            }
        }, {
            path: '/detail',
            component: () => import('@/views/detail/index.vue'),
            meta: {
            }
        }, {
            path: '/403',
            component: () => import('@/views/403.vue')
        },]

    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('@/views/404.vue')
    }];
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior: (to, from, savedPosition) => {
        if (!savedPosition) {
            return {
                top: 0
            }
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(savedPosition)
            }, 100)
        })
    }
})
router.afterEach(afterEach)
router.beforeEach(beforeEach)
export default router