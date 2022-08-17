<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import {
    Expand,
    Fold,
    Connection,
    Sunrise,
    Files,
    Cloudy,
    Avatar,
    Setting,
    MagicStick
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
                    <el-menu-item index="4" @click="$router.push('/dealOther')">
                        <el-icon>
                            <cloudy />
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
                    </el-menu>
                    <div>
                        <el-popover :width="200" trigger="hover" class="userPopover">
                            <template #reference>
                                <el-icon style="margin-right:15px" @click="$router.push('/')">
                                    <magicStick />
                                </el-icon>
                            </template>
                            <div>
                                返回主页
                            </div>
                        </el-popover>

                        <el-popover :width=" 200" trigger="hover" class="userPopover">
                                    <template #reference>
                                        <el-icon style="margin-right:15px">
                                            <avatar />
                                        </el-icon>
                                    </template>
                                    <div>
                                        来自<p>SmallMonkey-ai</p>
                                    </div>
                        </el-popover>
                        <el-popover :width="150" trigger="hover" class="userPopover">
                            <template #reference>
                                <el-icon>
                                    <setting />
                                </el-icon>
                            </template>
                            <div>
                                待完成
                            </div>
                        </el-popover>
                    </div>
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

.el-header {
    display: flex;
    justify-content: space-between;
}

.flex-grow {
    flex-grow: 1;
}
</style>
