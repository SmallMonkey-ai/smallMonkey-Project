import { createApp, nextTick } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";
import router from '@/router'
import DealCurrentArray from './plugins/myJs/dealArray'
import TimeFormatter from './plugins/myJs/time'
import DealObject from './plugins/myJs/dealObject'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/css/dark/css-vars.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const store = createPinia()
store.use(piniaPluginPersistedstate)
let dealCurrentArray = new DealCurrentArray()
let timeFormatter = new TimeFormatter()
let dealObject = new DealObject()
const app = createApp(App)
nextTick(() => {
    app.config.globalProperties.$Array = dealCurrentArray
    app.config.globalProperties.$Time = timeFormatter
    app.config.globalProperties.$Object = dealObject
})

app.use(createPinia())
app.use(router)
app.mount('#app')


import useUserStore from './store/user'
const user = useUserStore()
router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        // 如果路径是 /login 则正常执行
        next()
    } else {
        // 如果不是 /login，判断是否有 token
        if (!user.token) {
            // 如果没有，则跳至登录页面
            next({ path: '/login' })
        } else {
            // 否则继续执行
            next()
        }
    }
})