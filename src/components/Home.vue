<template>
    <div class="mt-4 mx-6">
        <div class="border-b-2 dark:border-zinc-700 pb-4 shadow-sm">
            <div class="flex justify-between items-center">
                <div class="text-left">
                    <Logo />
                </div>
                <div class="flex gap-4 justify-end items-center">
                    <SearchBar @search="handleSearch" />
                    <ThemeToggle />
                </div>
            </div>
        </div>

        <SkeletonLoader v-if="isLoading" class="mt-4" />
        <div v-if="noResults" class="mt-4 text-center">
            <div class="p-6">
                <div class="flex justify-center items-center mb-4">
                </div>
                <p class="text-xl font-semibold text-zinc-800 dark:text-zinc-400">
                    No movies found for your search
                </p>
            </div>
        </div>
        <SearchList :movies="movies" @selectMovie="onMovieSelect" class="mt-4" />
        <SpinnerLoader v-if="isLoadingMore" />
        <MovieModal v-if="selectedMovie || isModalLoading" :movie="selectedMovie" :is-loading="isModalLoading"
            @close="closeModal" />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import SearchBar from "./SearchBar.vue";
import SearchList from "./SearchList.vue";
import MovieModal from "./MovieModal.vue";
import ThemeToggle from "./ThemeToggle.vue";
import SkeletonLoader from "./SkeletonLoader.vue";
import SpinnerLoader from "./SpinnerLoader.vue";
import Logo from "./Logo.vue";
import axios from "axios";
import { debounce } from 'lodash-es';

const movies = ref([]);
const selectedMovie = ref(null);
const apikey = import.meta.env.VITE_API_KEY;
const isLoading = ref(false);
const isLoadingMore = ref(false);
const isModalLoading = ref(false);
const query = ref('');
const page = ref(1);
const hasMore = ref(true);
const noResults = ref(false);
const dummyPoster = 'https://i.imghippo.com/files/taw6460jg.jpg';


const fetchMovies = async (searchQuery, currentPage = 1) => {
    if (!hasMore.value) return;

    const loadingRef = currentPage === 1 ? isLoading : isLoadingMore;
    loadingRef.value = true;
    noResults.value = false;

    try {
        const response = await axios.get('https://www.omdbapi.com', {
            params: {
                apikey,
                s: searchQuery,
                page: currentPage
            },
        });

        const newMovies = response.data.Search || [];

        if (currentPage === 1) {
            movies.value = newMovies;
        } else {
            movies.value = [...movies.value, ...newMovies];
        }

        movies.value.forEach(movie => {
            if (movie.Poster === 'N/A') movie.Poster = dummyPoster;
        })

        hasMore.value = newMovies.length > 0;

        if (currentPage === 1 && newMovies.length === 0) {
            noResults.value = true;
        }
        else {
            noResults.value = false;
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
    } finally {
        loadingRef.value = false;

    }
};

const handleSearch = debounce((searchQuery) => {
    if (searchQuery.trim()) {
        query.value = searchQuery;
        page.value = 1;
        hasMore.value = true;
        fetchMovies(searchQuery);
    }
}, 300);

const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100 &&
        !isLoading.value &&
        !isLoadingMore.value &&
        hasMore.value) {
        page.value++;
        fetchMovies(query.value, page.value);
    }
};

const onMovieSelect = async (movieId) => {
    isModalLoading.value = true;
    try {
        const response = await axios.get('https://www.omdbapi.com', {
            params: {
                apikey,
                i: movieId,
            },
        });
        selectedMovie.value = response.data;
        if ( selectedMovie.value.Poster == 'N/A') selectedMovie.value.Poster = dummyPoster;

    } catch (error) {
        console.error("Error fetching movie details:", error);
    } finally {
        isModalLoading.value = false;
    }
};

const closeModal = () => {
    selectedMovie.value = null;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped></style>