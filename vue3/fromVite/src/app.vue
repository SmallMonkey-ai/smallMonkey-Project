<script setup>
import footerComponent from './views/layout/footer.vue'
import asideComponent from './views/layout/aside.vue'
import headerComponent from './views/layout/header.vue'
import mainComponent from './views/layout/main.vue'
import { ref, onMounted } from 'vue'
onMounted(() => {
    console.log(user.token)
})
import { useRouter } from 'vue-router'
const router = useRouter()
import useCounterStore from './store/user'
const user = useCounterStore()
</script>

<template>
    <div>
        <el-container style="overflow: hidden;height: 100vh;" v-if="user.token">
            <asideComponent></asideComponent>
            <el-container style="display:flex;flex-direction: column;">
                <headerComponent />
                <mainComponent />
                <footerComponent />
            </el-container>
        </el-container>
        <el-container style="overflow: hidden;height: 100vh;" v-else>
            <router-view></router-view>
        </el-container>
    </div>
</template>

<style scoped lang="scss">

.el-main::-webkit-scrollbar {
    display: none;
}
</style>
