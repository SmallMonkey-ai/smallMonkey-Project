<script setup>
import { ref, computed, getCurrentInstance } from 'vue';
const tableData = [
    {
        wayName: 'judgeArray',
        params: 'array',
        paramsOption: '-',
        desc: '判断是否为数组对象 ',
    },
    {
        wayName: 'removeSameArray',
        params: 'array',
        paramsOption: '-',
        desc: '非对象数组去重',
    },
    {
        wayName: 'removeSameObjectArray',
        params: 'array',
        paramsOption: '-',
        desc: '对象数组去重',
    },
    {
        wayName: 'spliceArrayPreItems',
        params: 'array || num',
        paramsOption: '-',
        desc: '选择数组的前几项',
    },
    {
        wayName: 'mergeArray',
        params: 'array1 || array2',
        paramsOption: '-',
        desc: '数组合并',
    },
    {
        wayName: 'arrayIntersection',
        params: 'array1 || array2',
        paramsOption: '-',
        desc: '输出两个数组公共部分（交集）',
    },
    {
        wayName: 'deleteArrayObjectElement',
        params: 'array || elementKey',
        paramsOption: '-',
        desc: '删除数组中所有对象包含的一项 ',
    },
    {
        wayName: 'deleteArrayElement',
        params: 'array || elementKey || elementValue',
        paramsOption: '-',
        desc: '删除数组中的一项 ',
    },
    {
        wayName: 'changeArrayKey',
        params: 'array || oldKey || newKey',
        paramsOption: '-',
        desc: '更改数组的key值 ',
    },
    {
        wayName: 'sortArray',
        params: 'array || sortRule || sortKey',
        paramsOption: '-',
        desc: '数组中根据某一项数据进行排序 ',
    },
    {
        wayName: 'arrayPeak',
        params: 'array || peakRule || peakKey',
        paramsOption: '-',
        desc: '输出数组中的极值 ',
    },
    {
        wayName: 'arrayFilterInvented',
        params: 'array || filterKey',
        paramsOption: '-',
        desc: '过滤数组中的虚值 空值 ',
    },
    {
        wayName: 'arrayClone',
        params: 'array || cloneRule',
        paramsOption: '-',
        desc: '数组的拷贝 ',
    },
    {
        wayName: 'flatToTree',
        params: 'array',
        paramsOption: '-',
        desc: '数组扁平化数据转成tree形数据 Json格式是通过 id 以及 parent_id进行关联的 ',
    },
    {
        wayName: 'treeToFlat',
        params: 'array',
        paramsOption: '-',
        desc: '数组tree形数据转成扁平化数据 子代放于children中 ',
    },
]
const search = ref('')
const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.desc.toLowerCase().includes(search.value.toLowerCase())
    )
)
let instance = getCurrentInstance()
function showDetail(row) {
    instance?.proxy?.$router.push({ name: '方法详情', params: { wayName: row.wayName, params: row.params, paramsOption: row.paramsOption, desc: row.desc, id: 2 } })
}
</script>

<template>
    <div class="main">
        <h1>欢迎来到数组处理页</h1>
        <el-table :data="filterTableData" height="650" style="width: 100%" @row-click="showDetail">
            <el-table-column prop="wayName" label="方法名" width="180" />
            <el-table-column prop="params" label="必传参数" width="240" />
            <el-table-column prop="paramsOption" label="可选参数" width="240" />
            <el-table-column prop="desc" label="描述" />
            <el-table-column  width="240">
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
