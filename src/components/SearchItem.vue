<template>
  <div @click="handleClick" class="card max-w-sm rounded-lg shadow-lg overflow-hidden bg-white dark:bg-zinc-900">
    <img :src="movie.Poster || 'placeholder-image.jpg'" alt="image description" class="w-full h-48 object-cover" />

    <div class="p-4 flex flex-col justify-between h-full">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-400 truncate">{{ movie.Title }}</h2>

      <h3 class="text-sm text-zinc-800 dark:text-zinc-500 mb-2">{{ movie.Year || 'Unknown Year' }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  movie: {
    type: Object,
    required: true
  }
});

const isExpanded = ref(false);
const emit = defineEmits(['click']);


const handleClick = () => {
  emit('click');
};

</script>

<style scoped></style>