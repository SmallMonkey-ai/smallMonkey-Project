import { createApp, nextTick } from 'vue'
import App from './App.vue'
import store from "@/store";
import router from '@/router'
import DealCurrentArray from './plugins/myJs/dealArray'
import TimeFormatter from './plugins/myJs/time'
import DealObject from './plugins/myJs/dealObject'
let dealCurrentArray = new DealCurrentArray()
let timeFormatter = new TimeFormatter()
let dealObject = new DealObject()
const app = createApp(App)
nextTick(() => {
    app.config.globalProperties.$Array = dealCurrentArray
    app.config.globalProperties.$Time = timeFormatter
    app.config.globalProperties.$Object = dealObject
})

app.use(store)
app.use(router)
app.mount('#app')
