<script setup>
import { ref, computed } from 'vue';
const tableData = [
    {
        wayName: 'judgeObject',
        params: 'object',
        desc: ' 判断只是对象（不是数组） ',
    },
    {
        wayName: 'judgeObjectIsEmpty',
        params: 'object',
        desc: '判断当前对象是否为空',
    },
    {
        wayName: 'ergodicObjectIsInclude',
        params: 'object key',
        desc: '遍历对象查看是否包括某key项值',
    },
    {
        wayName: 'mergeObject',
        params: 'object',
        desc: '对象合并 将需要合并的对象以数组传入 [obj1,obj2,obj3] 当只传一个对象是 相当于对象的浅拷贝',
    },
    {
        wayName: 'removeObjectEmpty',
        params: 'object',
        desc: '去除对象里面的空值',
    },
    {
        wayName: 'changeObjectKey',
        params: 'object newkeyS',
        desc: '更改对象里的key值',
    }
]
const search = ref('')
const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.desc.toLowerCase().includes(search.value.toLowerCase())
    )
)
function showDetail(row) {
    console.log(row)
}
</script>

<template>
    <div class="main">
        <h1>欢迎来到对象处理页</h1>
        <el-table :data="filterTableData" height="650" style="width: 100%" @row-click="showDetail">
            <el-table-column prop="wayName" label="方法名" width="180" />
            <el-table-column prop="params" label="参数" width="240" />
            <el-table-column prop="desc" label="描述" />
            <el-table-column align="right">
                <template #header>
                    <el-input v-model="search" size="small" placeholder="搜索描述" />
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<style scoped lang="scss">
.main {
    h1 {
        padding-left: 50px;
    }
}
</style>
