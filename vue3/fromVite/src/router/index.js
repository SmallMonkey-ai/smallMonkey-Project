import { createRouter, createWebHashHistory } from "vue-router";
const login = () => import('../views/Login/index.vue')
const welcome = () => import('../components/Welcome/index.vue')
const dealTime = () => import('../components/Time/index.vue')
const dealArray = () => import('../components/Array/index.vue')
const dealObject = () => import('../components/Object/index.vue')
const dealOther = () => import('../components/Other/index.vue')
const chart = () => import('../components/Chart/index.vue')
const tableItem = () => import('../components/PublicPage/tableItem.vue')
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/welcome',
        },
        {
            path: '/login',
            name: '登录',
            component: login
        },
        {
            path: '/welcome',
            name: '欢迎',
            component: welcome
        },
        {
            path: '/dealTime',
            name: '时间处理',
            component: dealTime
        },
        {
            path: '/dealArray',
            name: '数组处理',
            component: dealArray
        },
        {
            path: '/dealObject',
            name: '对象处理',
            component: dealObject
        },
        {
            path: '/chart',
            name: '图表',
            component: chart
        },
        {
            path: '/dealOther',
            name: '其他处理',
            component: dealOther
        },
        {
            path: '/tableItem',
            name: '方法详情',
            component: tableItem
        },
    ]
})
router.afterEach((to, from, next) => {
    document.title = to.name;
})
export default router;