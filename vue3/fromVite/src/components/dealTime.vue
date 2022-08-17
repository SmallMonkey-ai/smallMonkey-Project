<script setup>
import { ref, computed, getCurrentInstance } from 'vue';
const tableData = [
    {
        wayName: 'dealCurrentTime',
        params: '-',
        paramsOption: 'format || time',
        desc: '格式化(处理时间默认返回当前时间精确到秒) 格式(YYYY-MM-DD HH:mm:ss) ',
    },
    {
        wayName: 'getDayOfWeek',
        params: '-',
        paramsOption: 'time',
        desc: '判断周几(当前日期为周几) 格式(YYYY-MM-DD HH:mm:ss)',
    },
    {
        wayName: 'getCurrentIsLeapYear',
        params: 'time',
        paramsOption: '-',
        desc: '判断闰年(当前日期是否为闰年) 格式(YYYY-MM-DD HH:mm:ss)',
    },
    {
        wayName: 'getTimeToKey',
        params: 'time',
        paramsOption: '-',
        desc: '转时间戳(时间) 格式(YYYY-MM-DD HH:mm:ss)',
    },
    {
        wayName: 'getKeyToTime',
        params: 'time',
        paramsOption: '-',
        desc: '转时间(时间戳) 格式(YYYY-MM-DD HH:mm:ss)',
    },
    {
        wayName: 'getNewDateFromNow',
        params: 'time || addOrSubtract || length || unit ',
        paramsOption: '-',
        desc: '加减时间(加上或减去指定时间) 格式(YYYY-MM-DD HH:mm:ss)',
    },
    {
        wayName: 'getTwoDateSpacing',
        params: 'arr unit',
        paramsOption: '-',
        desc: '时间间隔(计算两个时间的间距 ) 格式(YYYY-MM-DD HH:mm:ss)',
    },
    {
        wayName: 'getCurrentMonthDays',
        params: 'time',
        paramsOption: '-',
        desc: '当前月天数(计算当前月份的天数) 格式(YYYY-MM-DD HH:mm:ss)',
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
    instance?.proxy?.$router.push({ name: '方法详情', params: { wayName: row.wayName, params: row.params, paramsOption: row.paramsOption, desc: row.desc, id: 1 } })
}
</script>

<template>
    <div class="main">
        <h1>欢迎来到时间处理页</h1>
        <el-table :data="filterTableData" height="650" style="width: 100%" @row-click="showDetail">
            <el-table-column prop="wayName" label="方法名" width="180" />
            <el-table-column prop="params" label="必传参数" width="240" />
            <el-table-column prop="paramsOption" label="可选参数" width="120" />
            <el-table-column prop="desc" label="描述" />
            <el-table-column width="240">
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
