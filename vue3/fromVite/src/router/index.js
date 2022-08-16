import { createRouter, createWebHashHistory } from "vue-router";
const welcome = () => import('../components/welcome.vue')
const dealTime = () => import('../components/dealTime.vue')
const dealArray = () => import('../components/dealArray.vue')
const dealObject = () => import('../components/dealObject.vue')
const dealOther = () => import('../components/dealOther.vue')
const tableItem = () => import('../components/tableItem.vue')
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'welcome',
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