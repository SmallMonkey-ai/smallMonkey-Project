<script setup>
import { onMounted, ref, getCurrentInstance, computed, reactive } from 'vue';
let instance = getCurrentInstance()
let RouteData = ref({})
let arr = ref([])
onMounted(() => {
    RouteData.value = instance?.proxy?.$route.params
    mustOptions.value.map((item) => {
        if (item.indexOf('array') != -1) {
            arr.value.push([{ name: '张三', age: 19 }, { name: '李四', age: 20 }, { name: '王五', age: 20 },{ name: '王五', age: null }])
        } else if (item.indexOf('array1') != -1) {
            arr.value.push([{ name: '张三', age: 19 }, { name: '李四', age: 20 }, { name: '王五', age: 20 }])
        } else if (item.indexOf('array2') != -1) {
            arr.value.push([{ name: '张三', age: 19 }, { name: '李六', age: 21 }, { name: '王七', age: 22 }])
        } else if (item.indexOf('elementKey') != -1) {
            arr.value.push('name')
        } else if (item.indexOf('elementValue') != -1) {
            arr.value.push('张三')
        } else if (item.indexOf('num') != -1) {
            arr.value.push(3)
        } else if (item.indexOf('sortRule') != -1) {
            arr.value.push('up')
        } else if (item.indexOf('sortKey') != -1) {
            arr.value.push('age')
        } else if (item.indexOf('peakRule') != -1) {
            arr.value.push('big')
        } else if (item.indexOf('peakKey') != -1) {
            arr.value.push('big')
        } else if (item.indexOf('filterKey') != -1) {
            arr.value.push('age')
        } else if (item.indexOf('cloneRule') != -1) {
            arr.value.push('deep')
        } else if (item.indexOf('oldKey') != -1) {
            arr.value.push('name')
        } else if (item.indexOf('newKey') != -1) {
            arr.value.push('newName')
        }
    })
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

let dealCurrentArrayResult = ref()
function makeCurrentArray() {
    dealCurrentArrayResult.value = instance?.proxy?.$Array[RouteData.value.wayName](arr.value[0], arr.value[1], arr.value[2], arr.value[3], arr.value[4])
}

function clearCurrentArray() {
    dealCurrentArrayResult.value = null
}
const form = reactive({
    params: [],
    paramsOption: []
})
let result = ref()
const onSubmit = () => {
    if (RouteData.value.id == 1) {
        result.value = instance?.proxy?.$Time[RouteData.value.wayName](...form.params, ...form.paramsOption)
    } else if (RouteData.value.id == 2) {
        if (form.params.length > 1) {
            result.value = instance?.proxy?.$Array[RouteData.value.wayName](...form.params)
        } else {

            console.log(form.paramsArray.split(" "))

        }
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
                        <el-form :model="form" label-width="230px" v-if="RouteData.id != 2">
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
                        <div v-else>
                            <div>
                                <p>处理前</p>
                                <div v-for="item in mustOptions" class="infoData">
                                    {{ item }}
                                    <div
                                        v-if="item.indexOf('array') != -1 && item.indexOf('array1') == -1 && item.indexOf('array2') == -1">
                                        [{name:'张三',age:19},{name:'李四',age:20},{name:'王五',age:20},{ name: '王五', age:
                                        null }]</div>
                                    <div v-if="item.indexOf('array1') != -1">
                                        [{name:'张三',age:19},{name:'李四',age:20},{name:'王五',age:20}]</div>
                                    <div v-else-if="item.indexOf('array2') != -1">
                                        [{name:'张三',age:19},{name:'李六',age:21},{name:'王七',age:22}]
                                    </div>
                                    <div v-else-if="item.indexOf('elementKey') != -1">name</div>
                                    <div v-else-if="item.indexOf('elementValue') != -1">张三</div>
                                    <div v-else-if="item.indexOf('num') != -1">3</div>
                                    <div v-else-if="item.indexOf('sortRule') != -1">up</div>
                                    <div v-else-if="item.indexOf('sortKey') != -1">age</div>
                                    <div v-else-if="item.indexOf('peakRule') != -1">big</div>
                                    <div v-else-if="item.indexOf('peakKey') != -1">age</div>
                                    <div v-else-if="item.indexOf('filterKey') != -1">age</div>
                                    <div v-else-if="item.indexOf('cloneRule') != -1">deep</div>
                                    <div v-else-if="item.indexOf('oldKey') != -1">name</div>
                                    <div v-else-if="item.indexOf('newKey') != -1">newName</div>
                                </div>
                            </div>
                            <div class="dealArrayButton">
                                <el-button type="primary" round @click="makeCurrentArray">处理</el-button>
                                <el-button type="primary" round @click="clearCurrentArray">清空</el-button>
                            </div>
                            <div>
                                <p>处理后</p>
                                <div class="infoData">
                                    <div>
                                        {{ dealCurrentArrayResult }}
                                    </div>
                                </div>
                            </div>
                        </div>
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
        padding: 0;

        li {
            height: 30px;
            font-size: 16px;
            line-height: 30px;
            background: #C0C0C0;
            padding-left: 3%;
        }
    }
}

.infoData {
    div {
        background: #C0C0C0;
        padding-left: 3%;
    }
}

.dealArrayButton {
    display: flex;
    width: 73px;
    margin: 10px;
}
</style>
