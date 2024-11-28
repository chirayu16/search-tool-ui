<template>
    <div class="mt-4 mx-6">
        <div class="flex justify-between items-center">
            <div class="text-left">
                <Logo/>
            </div>
            <div class="flex gap-4 justify-end items-center">
                <SearchBar @search="handleSearch" />
                <ThemeToggle />
            </div>
            
        </div>
      <SkeletonLoader v-if="isLoading" />
      <SearchList :movies="movies" @selectMovie="onMovieSelect" />
    <div
    v-if="selectedMovie"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
    <div
      class="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6 relative"
      >
      <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
        {{ selectedMovie.Title }}
      </h2>
      <img
        :src="selectedMovie.Poster"
        alt="Selected Movie"
        class="w-full h-48 object-cover rounded my-4"
      />
      <p class="text-gray-600 dark:text-gray-300">{{ selectedMovie.Plot }}</p>
      <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
        <strong>Year:</strong> {{ selectedMovie.Year }}
      </p>
      <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
        <strong>Genre:</strong> {{ selectedMovie.Genre }}
      </p>
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
      >
        ✖
      </button>
    </div>
  </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import SearchBar from "./SearchBar.vue";
  import SearchList from "./SearchList.vue";
  import ThemeToggle from "./ThemeToggle.vue";
  import SkeletonLoader from "./SkeletonLoader.vue";
  import Logo from "./Logo.vue";
  import axios from "axios";
  
  const movies = ref([]);
  const selectedMovie = ref(null);
  const apikey = import.meta.env.VITE_API_KEY
  const isLoading = ref(false);


  let debounceTimeout;
  const debounce = (func, delay) => {
    return (...args) => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  
  const fetchMovies = async (query) => {
    isLoading.value = true;
    try {
      const response = await axios.get(`http://www.omdbapi.com`, {
        params: {
          apikey,
          s: query,
        },
      });
      movies.value = response.data.Search || [];
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    finally {
    isLoading.value = false;
  }
  };
  
  const handleSearch = debounce((query) => {
    if (query.trim()) {
      fetchMovies(query);
    }
  }, 300);
  

  const onMovieSelect = async (movieId) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com`, {
        params: {
          apikey,
          i: movieId,
        },
      });
      selectedMovie.value = response.data;
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };
  
  const selectMovie = (movie) => {
  selectedMovie.value = movie;
};
const closeModal = () => {
  selectedMovie.value = null;
};
  </script>
  
  <style scoped>

  </style>
  