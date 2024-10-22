<script setup>
    import Header from '../components/Header.vue';
</script>

<template>
    
    <div class="h-screen bg-home-background bg-cover bg-center">
    <div>
            <Header/>
    </div>
    <div class="max">
        <p class="text-white text-2xl">This Home</p>
    </div>       
    </div>
    <router-view />
</template>

<style scoped>

</style>