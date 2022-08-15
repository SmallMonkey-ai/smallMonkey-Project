<script setup>
import { reactive, getCurrentInstance } from 'vue'
let { proxy } = getCurrentInstance()
import { storeToRefs } from 'pinia'
import useStore from '../store/index'
const { user } = useStore()
const { name, age } = storeToRefs(user)
user.name = '李四'
</script>

<template>
    <h1>测试页</h1>
    <div>{{ name }} -- {{ age }}</div>
</template>

<style scoped lang="scss">
</style>
