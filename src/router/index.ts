import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import { afterEach, beforeEach } from './guard'
import detail from '@/views/detail/index.vue'
import home from '@/views/home/index.vue'
import login from '@/views/login/index.vue'
const routes = [{ path: '/login', component: login }, {
    path: '/detail',
    component: detail
},
{ path: '/home', component: home },];
const router = createRouter({
    history: createWebHistory(),
    // history: createMemoryHistory(),
    routes: routes
})
router.afterEach(afterEach)
router.beforeEach(beforeEach)
export default router