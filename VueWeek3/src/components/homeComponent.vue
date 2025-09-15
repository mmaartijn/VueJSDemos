<script setup>
    import { ref } from 'vue';

    let message = ref('Hello from Home Component!');
</script>

<template>
    <h1>{{ message }}</h1>
</template>

<style scoped>
/* Add styles here if needed */
</style>