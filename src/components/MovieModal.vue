<template>
    <div v-if="movie || isLoading" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white dark:bg-zinc-800 rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <SpinnerLoader v-if="isLoading" />
            <div v-else>
                <h2 class="text-xl font-semibold text-gray-800 dark:text-white">{{ movie.Title }}</h2>
                <img :src="movie.Poster" alt="Selected Movie" class="w-full h-48 object-cover rounded my-4" />
                <p class="text-zinc-600 dark:text-zinc-300">{{ movie.Plot }}</p>
                <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <strong>Year:</strong> {{ movie.Year }}
                </p>
                <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <strong>Genre:</strong> {{ movie.Genre }}
                </p>
            </div>
            <button @click="closeModal"
                class="absolute top-2 right-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200">
                ✖
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import SpinnerLoader from "./SpinnerLoader.vue";

const props = defineProps({
    movie: {
        type: Object,
        required: false,
    },
    isLoading: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits(["close"]);

const closeModal = () => {
    emit("close");
};
</script>
