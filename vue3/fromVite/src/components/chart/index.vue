<script setup>
import { reactive, ref, onMounted } from 'vue';
import lineComponent from './lineComponent.vue'
import barComponent from './barComponent.vue'
import pieComponent from './pieComponent.vue'
const lineState = reactive({
    option: {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['新增注册', '付费用户', '活跃用户', '订单数', '当日总收入']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '15%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['2021-03-11', '2021-03-12', '2021-03-13', '2021-03-14', '2021-03-15', '2021-03-16', '2021-03-17']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '新增注册',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '付费用户',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '活跃用户',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '订单数',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '当日总收入',
                type: 'line',
                stack: '总量',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    }
})
const barState = reactive({
    option: {
        title: {
            text: "", //主标题
            textStyle: {
                color: "#8493BA", //颜色
                // fontWeight: "bold", //粗细
                fontSize: 12, //大小
                align: "center", //水平对齐
            },
            left: "6",
            top: "0",
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: "3%",
            right: "12%",
            bottom: "0%",
            top: "5%",
            containLabel: true,
        },
        xAxis: [
            {
                name: "",
                axisLabel: {
                    color: "#8493BA",
                    fontFamily: "pfm",
                    fontSize: 12,
                },
                axisTick: {
                    alignWithLabel: true,
                },
                splitLine: { show: false }, //去除网格线
                type: "category",
                axisLabel: {
                    interval: 0, //横轴信息全部显示
                    // rotate: 30, //-30度角倾斜显示
                },
                data: ['张三', '李四', '王五', '赵六'],
            },
        ],
        yAxis: [
            {
                splitLine: { show: false }, //去除网格线
                type: "value",
            },
        ],
        series: [
            {
                type: "bar",
                barWidth: 20, //柱图宽度
                itemStyle: {
                    normal: {
                    },
                },
                data: [10, 20, 23, 50],
            },
        ],
    }
})
const pieState = reactive({
    option: {
        title: {
            text: '',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            show: false,
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        toolbox: {
            feature: {
                saveAsImage: {
                    title: '下载'
                },
                magicType: { show: true, type: ['line', 'bar'] },
                dataView: {
                    show: true,
                    // readOnly: true,
                    title: '数据视图'
                },
            }
        },
        legend: {
            top: 30,
            left: 'center',
            data: ['CityA', 'CityB', 'CityD', 'CityC', 'CityE']
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                labelLine: {
                    show: false
                },
                // selectedMode: 'single',
                data: [
                    {
                        value: 1548,
                        name: 'CityE',
                        // label: {
                        //     // formatter: [
                        //     //     '{title|{b}}{abg|}',
                        //     //     '  {weatherHead|Weather}{valueHead|Days}{rateHead|Percent}',
                        //     //     '{hr|}',
                        //     //     '  {Sunny|}{value|202}{rate|55.3%}',
                        //     //     '  {Cloudy|}{value|142}{rate|38.9%}',
                        //     //     '  {Showers|}{value|21}{rate|5.8%}'
                        //     // ].join('\n'),
                        //     backgroundColor: '#eee',
                        //     borderColor: '#777',
                        //     borderWidth: 1,
                        //     borderRadius: 4,
                        //     // rich: {
                        //     //     title: {
                        //     //         color: '#eee',
                        //     //         align: 'center'
                        //     //     },
                        //     //     abg: {
                        //     //         backgroundColor: '#333',
                        //     //         width: '100%',
                        //     //         align: 'right',
                        //     //         height: 25,
                        //     //         borderRadius: [4, 4, 0, 0]
                        //     //     },
                        //     //     Sunny: {
                        //     //         height: 30,
                        //     //         align: 'left',
                        //     //     },
                        //     //     Cloudy: {
                        //     //         height: 30,
                        //     //         align: 'left',
                        //     //     },
                        //     //     Showers: {
                        //     //         height: 30,
                        //     //         align: 'left',
                        //     //     },
                        //     //     weatherHead: {
                        //     //         color: '#333',
                        //     //         height: 24,
                        //     //         align: 'left'
                        //     //     },
                        //     //     hr: {
                        //     //         borderColor: '#777',
                        //     //         width: '100%',
                        //     //         borderWidth: 0.5,
                        //     //         height: 0
                        //     //     },
                        //     //     value: {
                        //     //         width: 20,
                        //     //         padding: [0, 20, 0, 30],
                        //     //         align: 'left'
                        //     //     },
                        //     //     valueHead: {
                        //     //         color: '#333',
                        //     //         width: 20,
                        //     //         padding: [0, 20, 0, 30],
                        //     //         align: 'center'
                        //     //     },
                        //     //     rate: {
                        //     //         width: 40,
                        //     //         align: 'right',
                        //     //         padding: [0, 10, 0, 0]
                        //     //     },
                        //     //     rateHead: {
                        //     //         color: '#333',
                        //     //         width: 40,
                        //     //         align: 'center',
                        //     //         padding: [0, 10, 0, 0]
                        //     //     }
                        //     // }
                        // }
                    },
                    { value: 735, name: 'CityC' },
                    { value: 510, name: 'CityD' },
                    { value: 434, name: 'CityB' },
                    { value: 335, name: 'CityA' }
                ],
                label: { show: false },
                emphasis: {
                    show: false,
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
})
let size = ref([400, 400])
</script>

<template>
    <div class="showChart">
        <lineComponent :option="lineState.option" :size="size"></lineComponent>
        <barComponent :option="barState.option" :size="size"></barComponent>
        <pieComponent :option="pieState.option" :size="size"></pieComponent>
    </div>
</template>

<style scoped lang="scss">
.showChart {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px;
}
</style>
