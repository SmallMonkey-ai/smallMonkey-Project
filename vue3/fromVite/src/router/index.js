import { createRouter, createWebHashHistory } from "vue-router";
import welcome from '../components/welcome.vue'
import home from '../components/home.vue'
import homeA from '../components/home2.vue'
import homeB from '../components/home3.vue'
import homeC from '../components/home4.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: welcome
            // redirect:'/home',
        },
        {
            path: '/home',
            name: '测试页',
            component: home
        },
        {
            path: '/homeA',
            name: '测试页2',
            component: homeA
        },
        {
            path: '/homeB',
            name: '测试页3',
            component: homeB
        },
        {
            path: '/homeC',
            name: '测试页4',
            component: homeC
        },
    ]
})
router.afterEach((to, from, next) => {
    document.title = to.name;
})
export default router;