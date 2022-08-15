<script setup>
import { reactive, getCurrentInstance } from 'vue'
let { proxy } = getCurrentInstance()
let object = reactive({
    name: '张三',
    age: 0,
    sex: false,
    null: {
        name: ''
    },
    is: undefined,
    money: '只是'
})

let rule = { name: 'name1', sex: 'sex1' }
let rule2 = {age:0,is:'dad'}

let result = proxy.$Object.mergeObject([rule2, rule])

console.log(result, 'result')
</script>

<template>
    <h1>测试页</h1>
    <div>{{ result }}</div>
</template>

<style scoped lang="scss">
</style>
