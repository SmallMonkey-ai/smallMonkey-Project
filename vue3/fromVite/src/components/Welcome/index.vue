<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
    <div class="main" @click="$router.push('/dealTime')">
        <h1>不要光赞美高耸的山峰，平原和丘陵也一样不朽！</h1>
        <img src="../../assets/welcome.jpeg" alt="">
    </div>
</template>

<style scoped lang="scss">
.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    width: 86%;
}
</style>
