<script setup>
const tableData = [
    {
        wayName: 'dealCurrentTime',
        params: 'format time',
        desc: '处理时间 默认返回当前时间精确到秒 ',
    },
    {
        wayName: 'getDayOfWeek',
        params: 'time',
        desc: '输出当前日期为周几',
    },
    {
        wayName: 'getCurrentIsLeapYear',
        params: 'time',
        desc: '判断是否是闰年',
    },
    {
        wayName: 'getTimeToKey',
        params: 'time',
        desc: '时间转时间戳',
    },
    {
        wayName: 'getKeyToTime',
        params: 'time',
        desc: '时间转时间戳',
    },
    {
        wayName: 'getTimeToKey',
        params: 'key',
        desc: '时间戳转时间',
    },
    {
        wayName: 'getNewDateFromNow',
        params: 'time addOrSubtract length unit ',
        desc: '加上或减去指定时间 ',
    },
    {
        wayName: 'getTwoDateSpacing',
        params: 'arr unit',
        desc: '计算两个时间的间距 ',
    },
    {
        wayName: 'getCurrentMonthDays',
        params: 'time',
        desc: '计算当前月份的天数 ',
    },

]
</script>

<template>
    <div class="main">
        <h1>欢迎来到时间处理页</h1>
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
