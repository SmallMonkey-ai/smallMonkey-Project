<script setup>
import { ref } from 'vue'
import {
    Expand,
    Fold,
    Connection,
    Sunrise,
    Files,
    Cloudy,
    Histogram,
    Drizzling
} from '@element-plus/icons-vue'
const isCollapse = ref(true)
</script>

<template>
    <el-aside>
        <div class="asideTop">
            <el-icon v-if="!isCollapse" @click="isCollapse = !isCollapse">
                <Fold />
            </el-icon>
            <el-icon v-else @click="isCollapse = !isCollapse">
                <Expand />
            </el-icon>
        </div>
        <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="1"
            text-color="#fff" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-menu-item index="1" @click="$router.push('/dealTime')">
                <el-icon>
                    <connection />
                </el-icon>
                <template #title>时间处理</template>
            </el-menu-item>
            <el-menu-item index="2" @click="$router.push('/dealArray')">
                <el-icon>
                    <sunrise />
                </el-icon>
                <template #title>数组处理</template>
            </el-menu-item>
            <el-menu-item index="3" @click="$router.push('/dealObject')">
                <el-icon>
                    <Files />
                </el-icon>
                <template #title>对象处理</template>
            </el-menu-item>
            <el-menu-item index="4" @click="$router.push('/chart')">
                <el-icon>
                    <histogram />
                </el-icon>
                <template #title>图表</template>
            </el-menu-item>
            <el-menu-item index="5" @click="$router.push('/dealOther')">
                <el-icon>
                    <cloudy />
                </el-icon>
                <template #title>其他</template>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<style scoped lang="scss">


.el-aside {
    width: auto;
    background: #545c64
}

.el-aside::-webkit-scrollbar {
    display: none;
}
.asideTop{
    margin-top: 0 .25rem;
    padding: 0 .25rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
}
.flex-grow {
    flex-grow: 1;
}

.el-radio-group {
    display: flex;
    flex-wrap: nowrap;

    .el-radio-button {
        width: 100%;
    }

    :deep(.addWidth) {
        span {
            display: block;
        }
    }

    :deep(.addWidth1) {
        span {
            display: block;
        }
    }
}

.el-menu {
    height: 94%;
    border-right: none;
    margin: auto;
}
</style>
