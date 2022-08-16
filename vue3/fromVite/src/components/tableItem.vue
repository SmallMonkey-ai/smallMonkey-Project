<script setup>
import { onMounted, ref, getCurrentInstance, computed, reactive } from 'vue';
let instance = getCurrentInstance()
let RouteData = ref({})
onMounted(() => {
    RouteData.value = instance?.proxy?.$route.params
})
let params = ref('')
let paramsOption = ref('')
const mustOptions = computed(() => {
    if (RouteData.value.params != '-') {
        return RouteData.value.params.split('||')
    } else {
        return []
    }
})
const Options = computed(() => {
    if (RouteData.value.paramsOption != '-') {
        return RouteData.value.paramsOption.split('||')
    } else {
        return []
    }
})
const returnParams = computed(() => {
    if (RouteData.value.params != '-') {
        params.value = RouteData.value.params.replace('||', ',')
    } else {
        params.value = ''
    }
    if (RouteData.value.paramsOption != '-') {
        paramsOption.value = RouteData.value.paramsOption.replace('||', ',')
    } else {
        paramsOption.value = ''
    }
    return `${params.value}${paramsOption.value}`
})
const form = reactive({
    params: [],
    paramsOption: []
})
let result = ref()
const onSubmit = () => {
    if (RouteData.value.id == 1) {
        result.value = instance?.proxy?.$Time[RouteData.value.wayName](...form.params, ...form.paramsOption)
    } else if (RouteData.value.id == 2) {
        // if (form.params.length > 1) {
        //     result.value = instance?.proxy?.$Array[RouteData.value.wayName](...form.params)
        // } else {
        //     // let arr = (JSON.parse(...form.params)) || (form.params)
        //     console.log(JSON.parse(form.params[0]))
        //     // result.value = instance?.proxy?.$Array[RouteData.value.wayName](arr)
        // }
        result.value = '还在努力开发中！！'
    }
}
const onCancel = () => {
    form.params = []
    form.paramsOption = []
}
</script>

<template>
    <h1>函数详情页</h1>
    <el-descriptions title="User Info">
        <el-descriptions-item label="函数名">{{ RouteData.wayName }}</el-descriptions-item>
        <el-descriptions-item label="必选参数">
            <el-tag size="big">{{ RouteData.params == '-' ? '空' : RouteData.params }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="可选参数">
            <el-tag size="big">{{ RouteData.paramsOption == '-' ? '空' : RouteData.paramsOption }}
            </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="描述">{{ RouteData.desc }}</el-descriptions-item>
    </el-descriptions>
    <h5>函数调用过程</h5>
    <div class="demo-collapse">
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="引入Js文件" name="1">
                <div v-if="RouteData.id == 1">
                    <div class="introduce">
                        <ul>
                            <li>
                                import TimeFormatter from '../plugins/myJs/time.js'
                            </li>
                            <li>
                                let timeFormatter = new TimeFormatter()
                            </li>
                            <li>
                                let result = timeFormatter.{{ RouteData.wayName }}({{ returnParams }})
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>示例</p>
                        <el-form :model="form" label-width="230px">
                            <el-form-item :label="'输入必选参数:' + item" v-for="(item, index) in mustOptions">
                                <el-input v-model="form.params[index]" />
                            </el-form-item>
                            <el-form-item :label="'输入可选参数:' + item" v-for="(item, index) in Options">
                                <el-input v-model="form.paramsOption[index]" />
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">确定</el-button>
                                <el-button @click="onCancel">清空</el-button>
                            </el-form-item>
                            <el-form-item v-if="result">{{ result }}</el-form-item>
                        </el-form>
                    </div>
                </div>
                <div v-if="RouteData.id == 2">
                    <div class="introduce">
                        <ul>
                            <li>
                                import DealCurrentArray from '../plugins/myJs/dealArray.js'
                            </li>
                            <li>
                                let dealCurrentArray = new DealCurrentArray()
                            </li>
                            <li>
                                let result = dealCurrentArray.{{ RouteData.wayName }}({{ returnParams }})
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>示例</p>
                        <el-form :model="form" label-width="230px">
                            <el-form-item :label="'输入必选参数:' + item" v-for="(item, index) in mustOptions">
                                <el-input v-model="form.params[index]" />
                            </el-form-item>
                            <el-form-item :label="'输入可选参数:' + item" v-for="(item, index) in Options">
                                <el-input v-model="form.paramsOption[index]" />
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">确定</el-button>
                                <el-button @click="onCancel">清空</el-button>
                            </el-form-item>
                            <el-form-item v-if="result">{{ result }}</el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="实例化挂载" name="2">
                <div>
                    敬请期待！！
                </div>
                <div>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<style scoped lang="scss">
.introduce {
    ul {
        display: flex;
        flex-direction: column;
        list-style: none;

        li {
            height: 30px;
            font-size: 16px;
            line-height: 30px;
            background: #C0C0C0;
            padding-left: 6%;
        }
    }
}
</style>
