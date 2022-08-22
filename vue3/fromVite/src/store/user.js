import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
    state: () => {
        return {
            userInfo: {
                userName: '',
            },
            token: localStorage.getItem('token') || ''
        }
    },
    persist: {
        enable: true
    },
})

export default useUserStore
