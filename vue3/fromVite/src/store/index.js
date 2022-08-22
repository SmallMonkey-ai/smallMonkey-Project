import useUserStore from './user'

// 统一导出useStore方法
export default function useStore() {
    return {
        user: useUserStore(),
    }
}
