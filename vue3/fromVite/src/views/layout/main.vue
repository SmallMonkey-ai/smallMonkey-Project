<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
onMounted(() => {
    router.push('./')
})
</script>

<template>
    <el-main>
        <router-view />
    </el-main>
</template>

<style scoped lang="scss">
</style>
