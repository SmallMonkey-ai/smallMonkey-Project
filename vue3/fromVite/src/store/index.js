import useUserStore from './user'
import useCounterStore from './counter'

// 统一导出useStore方法
export default function useStore() {
    return {
        user: useUserStore(),
        counter: useCounterStore(),
    }
}
