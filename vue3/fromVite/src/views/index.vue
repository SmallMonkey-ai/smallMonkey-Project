<script setup>
import footerComponent from './layout/footer.vue'
import asideComponent from './layout/aside.vue'
import headerComponent from './layout/header.vue'
import mainComponent from './layout/main.vue'
</script>

<template>
    <div>
        <el-container style="overflow: hidden;height: 97vh;">
            <asideComponent></asideComponent>
            <el-container style="display:flex;flex-direction: column;">
                <headerComponent />
                <mainComponent />
                <footerComponent />
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
</style>
