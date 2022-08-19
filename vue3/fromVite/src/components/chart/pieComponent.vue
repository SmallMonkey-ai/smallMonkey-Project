<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from "echarts";
const props = defineProps(['option', 'size'])
const pieChart = ref(null)
onMounted(() => {
    setTimeout(() => {
        drawChartPie()
    }, 20)
})
function drawChartPie() {
    const ChartPie = echarts.init(pieChart.value);
    ChartPie.setOption(props.option)
    window.addEventListener("resize", () => {
        //页面大小变化后E-charts也更改大小
        ChartPie.resize();
    })
}

</script>

<template>
    <div class="component">
        <div ref="pieChart" :style="{ width: props.size[0] + 'px', height: props.size[1] + 'px' }"></div>
    </div>
</template>
<style scoped lang="scss">
.component {
    margin: 0 20px;
}
</style>
