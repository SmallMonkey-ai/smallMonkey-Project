<script setup>
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
const router = useRouter()
import useUserStore from '../../store/user'
const user = useUserStore()
function submitForm(item) {
    if (!item) return
    item.validate((valid, fields) => {
        if (valid) {
            user.token = '11111'
            user.userInfo.userName = ruleForm.name
            localStorage.setItem('token', user.token)
            router.replace('/welcome')
        } else {
            console.log('error submit!', fields)
        }
    })
}
const formSize = ref('default')
const ruleFormRef = ref(null)
const ruleForm = reactive({
    name: 'admin',
    password: '123456',
})
const rules = reactive({
    name: [
        { required: true, message: 'Please input name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    password: [
        {
            required: true,
            message: 'Please input password',
            trigger: 'change',
        },
    ],
})
const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}))

</script>

<template>
    <div class="Login">
        <div class="main">
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="6rem" class="demo-ruleForm"
                :size="formSize" status-icon>
                <el-form-item label="账号：" prop="name">
                    <el-input v-model="ruleForm.name" />
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input v-model="ruleForm.password" type="password" show-password />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)" style="margin-left:50px">登录</el-button>
                    <el-button type="primary" @click="resetForm(ruleFormRef)">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style scoped lang="scss">
.Login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg, #f66, #f90, #3c9, #09f, #66f) left center/400% 400%;
    font-weight: bold;
    font-size: 100px;
    color: #fff;
    animation: move 10s infinite;

    .main {
        width: 20rem;
        height: 20rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@keyframes move {

    0%,
    100% {
        background-position-x: left;
    }

    50% {
        background-position-x: right;
    }
}

:deep(.el-form-item__label) {
    width: auto !important;
}

:deep(.el-form-item__content) {
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>