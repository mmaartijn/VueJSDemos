<script setup>
  import axios from 'axios';
  import { onMounted, ref, defineProps, inject } from 'vue';
import { useSongStore } from '@/stores/useSongStore';

  const songStore = useSongStore();

  const favSong = songStore.favSong;
</script>

<template>
    <h1>Demo week 4 met localstorage</h1>
  
    <form>
      <label for="favArtist">Favorite artist:</label>
      <input type="text" name="favArtist" v-model="favSong.artist" />
      <br />

        <label for="favSong">Favorite song:</label>
        <input type="text" name="favSong" v-model="favSong.title" />
        <br />
        <button @click.prevent="songStore.updateFavSong(favSong)">Save to localstorage</button>
    </form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    
} 

textarea {
    resize: none;
    width: 100%;
    height: 300px;
}
</style>