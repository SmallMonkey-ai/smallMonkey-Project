<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from "echarts";
const props = defineProps(['option', 'size'])
const barChart = ref(null)
onMounted(() => {
    setTimeout(() => {
        drawChartBar()
    }, 20)
})
function drawChartBar() {
    const ChartBar = echarts.init(barChart.value);
    ChartBar.setOption(props.option)
    window.addEventListener("resize", () => {
        //页面大小变化后E-charts也更改大小
        ChartBar.resize();
    })
}

</script>

<template>
    <div class="component">
        <div ref="barChart" :style="{ width: props.size[0] + 'px', height: props.size[1] + 'px' }"></div>
    </div>
</template>
<style scoped lang="scss">

.component {
    margin: 0 20px;
}
</style>
