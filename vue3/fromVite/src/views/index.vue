<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    Expand,
    Fold
} from '@element-plus/icons-vue'
import footerComponent from './footer.vue'
const isCollapse = ref(true)
const handleOpen = (key, keyPath) => {
    console.log(1, key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(2, key, keyPath)
}
let src = new URL('../assets/monkeyDream.jpeg', import.meta.url).href
const router = useRouter()
onMounted(() => {
    router.push('./')

})
</script>

<template>
    <div>
        <el-container style="overflow: hidden;height: 97vh;">
            <el-aside>
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                    <el-radio-button :label="true" v-if="!isCollapse" class="addWidth">关闭
                        <el-icon>
                            <Fold />
                        </el-icon>
                    </el-radio-button>
                    <el-radio-button :label="false" v-if="isCollapse" class="addWidth1">展开
                        <el-icon>
                            <Expand />
                        </el-icon>
                    </el-radio-button>
                </el-radio-group>
                <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
                    default-active="1" text-color="#fff" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-menu-item index="1" @click="$router.push('./home')">
                        <el-icon>
                            <location />
                        </el-icon>
                        <template #title>时间处理</template>
                    </el-menu-item>
                    <el-menu-item index="2" @click="$router.push('./homeA')">
                        <el-icon>
                            <icon-menu />
                        </el-icon>
                        <template #title>数组处理</template>
                    </el-menu-item>
                    <el-menu-item index="3" @click="$router.push('./homeB')">
                        <el-icon>
                            <document />
                        </el-icon>
                        <template #title>对象处理</template>
                    </el-menu-item>
                    <el-menu-item index="4" @click="$router.push('./homeC')">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <template #title>其他</template>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
                        @select="handleSelect">
                        <el-menu-item index="0">
                            <el-avatar :src="src" />
                        </el-menu-item>
                        <div class="flex-grow" />
                        <el-menu-item index="1">空间1</el-menu-item>
                        <el-menu-item index="2">空间2</el-menu-item>
                        <!-- <el-sub-menu index="2">
                            <template #title>Workspace</template>
                            <el-menu-item index="2-1">item one</el-menu-item>
                            <el-menu-item index="2-2">item two</el-menu-item>
                            <el-menu-item index="2-3">item three</el-menu-item>
                            <el-sub-menu index="2-4">
                                <template #title>item four</template>
                                <el-menu-item index="2-4-1">item one</el-menu-item>
                                <el-menu-item index="2-4-2">item two</el-menu-item>
                                <el-menu-item index="2-4-3">item three</el-menu-item>
                            </el-sub-menu>
                        </el-sub-menu> -->
                    </el-menu>
                </el-header>
                <el-main>
                    <router-view />
                </el-main>
                <el-footer>
                    <footerComponent></footerComponent>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
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
            width: 81%;
        }
    }
}

.el-menu {
    height: 94%;
}

.el-aside {
    width: auto;
}

.flex-grow {
    flex-grow: 1;
}
</style>
