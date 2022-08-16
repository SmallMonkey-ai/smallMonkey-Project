<script setup>
</script>

<template>
    <div class="main" @click="$router.push('/dealTime')">
        <h1>欢迎页！！</h1>
        <img src="../assets/welcome.png" alt="">
    </div>
</template>

<style scoped lang="scss">

.main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
img {
    width: 500px;
}
</style>
