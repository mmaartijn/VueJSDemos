<script setup>
  import { onMounted, ref } from 'vue';
import CounterComponent from './components/counterComponent.vue';
  
  onMounted(() => {
    document.title = 'Vue 3 - The Complete Guide';
  });

  let message = ref('Hello Vue!');
</script>

<template>
  <h1>{{ message }}</h1>
  <input v-model="message" />
  <CounterComponent :initialCount="5" />
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <RouterView />

  <RouterLink to="/about">About</RouterLink> |
  <RouterLink to="/">Home</RouterLink>
</template>

<style scoped></style>
