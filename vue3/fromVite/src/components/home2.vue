<script setup>
const tableData = [
    {
        wayName: 'judgeArray',
        params: 'array',
        desc: '判断是否为数组对象 ',
    },
    {
        wayName: 'removeSameArray',
        params: 'array',
        desc: '非对象数组去重',
    },
    {
        wayName: 'removeSameObjectArray',
        params: 'array',
        desc: '对象数组去重',
    },
    {
        wayName: 'spliceArrayPreItems',
        params: 'array num',
        desc: '选择数组的前几项',
    },
    {
        wayName: 'mergeArray',
        params: 'array1 array2',
        desc: '数组合并',
    },
    {
        wayName: 'arrayIntersection',
        params: 'array1 array2',
        desc: '输出两个数组公共部分（交集）',
    },
    {
        wayName: 'deleteArrayObjectElement',
        params: 'array elementKey',
        desc: '删除数组中所有对象包含的一项 ',
    },
    {
        wayName: 'deleteArrayElement',
        params: 'array elementKey elementValue',
        desc: '删除数组中的一项 ',
    },
    {
        wayName: 'changeArrayKey',
        params: 'array oldKey newKey',
        desc: '更改数组的key值 ',
    },
    {
        wayName: 'sortArray',
        params: 'array rule key',
        desc: '数组中根据某一项数据进行排序 ',
    },
    {
        wayName: 'arrayPeak',
        params: 'array rule key',
        desc: '输出数组中的极值 ',
    },
    {
        wayName: 'arrayFilterInvented',
        params: 'array key',
        desc: '过滤数组中的虚值 空值 ',
    },
    {
        wayName: 'arrayClone',
        params: 'array rule',
        desc: '数组的拷贝 ',
    },
    {
        wayName: 'flatToTree',
        params: 'array',
        desc: '数组扁平化数据转成tree形数据 Json格式是通过 id 以及 parent_id进行关联的 ',
    },
    {
        wayName: 'treeToFlat',
        params: 'array',
        desc: '数组tree形数据转成扁平化数据 子代放于children中 ',
    },
]
</script>

<template>
    <div class="main">
        <h1>欢迎来到数组处理页</h1>
        <el-table :data="tableData" height="650" style="width: 100%">
            <el-table-column prop="wayName" label="方法名" width="180" />
            <el-table-column prop="params" label="参数" width="240" />
            <el-table-column prop="desc" label="描述" />
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
