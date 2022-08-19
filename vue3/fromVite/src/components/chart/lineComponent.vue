<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from "echarts";
const props = defineProps(['option', 'size'])
const lineChart = ref(null)
onMounted(() => {
    setTimeout(() => {
        drawChartLine()
    }, 20)
})
function drawChartLine() {
    const ChartLine = echarts.init(lineChart.value);
    ChartLine.setOption(props.option)
    ChartLine.addEventListener("resize", () => {
        //页面大小变化后E-charts也更改大小
        ChartLine.resize();
    })
}

</script>

<template>
    <div class="component">
        <div ref="lineChart" :style="{ width: props.size[0] + 'px', height: props.size[1] + 'px' }"></div>
    </div>
</template>

<style scoped lang="scss">

.component{
    margin: 0 20px;
}
</style>
