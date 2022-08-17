<script setup>
let src = new URL('../../assets/monkeyDream.jpeg', import.meta.url).href
import {
    Avatar,
    Setting,
    MagicStick
} from '@element-plus/icons-vue'
</script>

<template>
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

            <el-popover :width="200" trigger="hover" class="userPopover">
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
</template>

<style scoped lang="scss">

.el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
