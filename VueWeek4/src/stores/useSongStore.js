import { defineStore } from 'pinia';
import useLocalStorage from '@/composables/useLocalStorage';
import { ref } from 'vue';

export const useSongStore = defineStore('songStore', {
  state: () => ({
    favSong: ref({artist: 'Arch Enemy', title: 'Nemesis' })
  }),

  actions: {
    updateFavSong(newSong) {
      this.favSong = newSong;
      localStorage.setItem('favSong', JSON.stringify(newSong));
    }
  }
});