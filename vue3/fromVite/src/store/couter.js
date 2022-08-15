import {  defineStore } from 'pinia'
import { ref, computed } from 'vue'

const useCounterStore = defineStore('counter', function () {
    const count = ref(0)
    const double = computed(() => count.value * 2)
    function increment() {
        count.value++
    }
    return {
        count,double,increment
    }
})

export default useCounterStore

