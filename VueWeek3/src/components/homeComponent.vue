<script setup>
    import { ref } from 'vue';
    import axios from 'axios';

    const message = ref('Hello from Home Component!');
    const myData = ref('');

    axios.interceptors.request.use(
        config => {
            config.headers['x-auth-token'] = 'mytoken123';
            return config;
        }
    );

    axios.get('/api/people/1')
        .then(response => {
            myData.value = response.data;
        });
    
</script>

<template>
    <h1>{{ myData.name }}</h1>
    <p>{{ myData.hair_color }}</p>
    <p>{{ myData.birth_year }}</p>
</template>

<style scoped>
/* Add styles here if needed */
</style>