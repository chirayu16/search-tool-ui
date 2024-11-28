<template lang="">
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div v-for="movie in movies" :key="movie.imdbID">
        <SearchItem
            :movie="movie"
            @click="selectMovie(movie.imdbID)"
        />
    </div>
</div>
</template>
<script setup>
import SearchItem from './SearchItem.vue'; 
import { defineProps, defineEmits } from "vue"; 
import { ref } from 'vue';

const props = defineProps({
  movies: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['selectMovie']);

const selectMovie = (movieId) => {
  emit('selectMovie', movieId);
};
</script>
<style scoped>

</style>