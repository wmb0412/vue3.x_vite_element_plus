import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import { afterEach, beforeEach } from './guard'
import detail from '@/views/detail/index.vue'
import home from '@/views/home/index.vue'
import NotFound from '@/views/404.vue'
import NotPower from '@/views/403.vue'
import power from '@/views/power/index.vue'
import login from '@/views/login/index.vue'
const routes = [{path:'/',redirect:'/login'},{
    path: '/login', component: login, meta: {

    }
}, {
    path: '/detail',
    component: detail,
    meta: {

    }
},
{
    path: '/home', component: home, meta: {

    }
}, {
    path: '/power', component: power, meta: {
        role: [1]
    }
}, {
    path: '/403', component: NotPower
}, {
    path: '/:pathMatch(.*)', component: NotFound
}];
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
router.afterEach(afterEach)
router.beforeEach(beforeEach)
export default router