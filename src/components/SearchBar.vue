<template lang="">
<div class="max-w-md mx-auto mt-4 mb-4">
  <div class="relative">
    <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
      <svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.6-10.6 7.5 7.5 0 0 0 10.6 10.6z" />
      </svg>
    </div>

    <input
      type="text"
      v-model="searchQuery"
      @input="emitSearch"
      placeholder="Search..."
      class="w-full p-4 pl-10 text-sm border border-zinc-300 dark:border-zinc-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-800 focus:border-zinc-300 dark:focus:border-zinc-800 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 "
    />
  </div>
</div>

</template>
<script setup>
import { ref, defineEmits } from 'vue';

const searchQuery = ref("");
const emit = defineEmits(['search']);

const emitSearch = () => {
  if (searchQuery.value.trim()) {
    emit("search", searchQuery.value);
  }
};
</script>
<style lang="">

</style>