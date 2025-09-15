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

    axios.get('http://localhost:1234/forecast')
        .then(response => {
            myData.value = response.data.weatherreport;
        });

    
</script>

<template>
    <h1>{{ myData.title }}</h1>
    <p>{{ myData.summary }}</p>
    <p>{{ myData.text }}</p>
</template>

<style scoped>
/* Add styles here if needed */
</style>