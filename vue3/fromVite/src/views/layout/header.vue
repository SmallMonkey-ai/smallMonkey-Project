<script setup>
import { ref } from 'vue'
import {
    Avatar,
    Setting,
    MagicStick,
    Sunny, Moon
} from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'
import useUserStore from '../../store/user'
import { useRouter } from 'vue-router'
const user = useUserStore()
const router = useRouter()
const isDark = useDark()
const toggleDark = useToggle(isDark)
let dark = ref(true)
function changeDark() {
    toggleDark()
}

function loginOut() {
    user.token = ''
    localStorage.setItem('token', '')
    router.push('/login')
}
let src = new URL('../../assets/monkeyDream.jpeg', import.meta.url).href
</script>

<template>
    <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect" color="red">
            <el-menu-item index="0">
                <el-avatar :src="src" />
            </el-menu-item>
            <div class="flex-grow" />
        </el-menu>
        <div class="headerRight">
            <div class="dark">
                <el-switch v-model="dark" class="mt-2" inline-prompt :active-icon="Sunny" :inactive-icon="Moon"
                    @change="changeDark" />
            </div>
            <el-popover :width="200" trigger="hover" class="userPopover">
                <template #reference>
                    <el-icon @click="$router.push('/')">
                        <magicStick />
                    </el-icon>
                </template>
                <div>
                    返回主页
                </div>
            </el-popover>
            <el-popover :width="200" trigger="hover" class="userPopover">
                <template #reference>
                    <el-icon>
                        <avatar />
                    </el-icon>
                </template>
                <div>
                    来自<p>{{ user.userInfo.userName }}</p>
                </div>
            </el-popover>
            <el-popover :width="150" trigger="hover" class="userPopover">
                <template #reference>
                    <el-icon>
                        <setting />
                    </el-icon>
                </template>
                <div @click="loginOut">
                    退出登陆
                </div>
            </el-popover>
        </div>
    </el-header>
</template>

<style scoped lang="scss">
.el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.headerRight {
    width: 6%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .dark {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
}

:deep(.el-switch__core .el-switch__action) {
    background: transparent;
}

:deep(.el-switch.is-checked .el-switch__core) {
    background-color: #797f85;
    border-color: #bcbfc3;
}

:deep(.el-switch__core) {
    background: #28292c;
}

:deep(.el-switch__core .is-icon, .el-switch__core) {
    color: #f3f1f1;
}
</style>
