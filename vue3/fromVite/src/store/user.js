import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            name: 'ls',
            age: 120,
        }
    },
})

export default useCounterStore
