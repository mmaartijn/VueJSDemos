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
  <hr/>
  <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink>
  <RouterView />
</template>

<style scoped></style>
