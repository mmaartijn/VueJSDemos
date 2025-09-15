<script setup>
    import { ref } from 'vue';

    let message = ref('Hello from About Component!');
</script>

<template>
    <h1>{{ message }}</h1>
    <h2>About</h2>
</template>

<style scoped>
/* Add styles here if needed */
</style>