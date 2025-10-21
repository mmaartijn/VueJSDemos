<script setup>
  import { reactive } from "vue";
  const props = defineProps({
    title: {
      type: String,
      default: "Test Component",
    },
  });

  const user = reactive({ name: "", age: "", search: null });

  const getAge = () => {
    console.log("Fetching age for", user.search);
    fetch("https://api.agify.io/?name=" + user.search)
      .then((response) => response.json())
      .then((data) => {
        console.log("Received data:", data);
        user.age = data.age;
        user.name = data.name;
        user.search = null;
      })
  };
</script>
<template>
  <h1>{{ props.title }}</h1>
  <div class="main">
    <div class="creds">
      <div
        style="width: 400px; height: 130px; margin-top: 20px; font-size: larger"
      >
        <span>Name: {{ user.name }}</span> <br />
        <span>Age: {{ user.age }}</span>
      </div>
      <div class="form">
        <label> Enter Firstname </label>
        <input
          type="text"
          v-model="user.search"
          style="font-size: 20px"
          placeholder="Enter name"
        />
        <button type="button" @click="getAge">Guess the age</button>
      </div>
    </div>
  </div>
</template>