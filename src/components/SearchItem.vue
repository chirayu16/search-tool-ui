<template lang="html">
<div @click="toggleDetails" class="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white dark:bg-slate-800">
  <!-- Card Image -->
  <img 
    src="https://primefaces.org/cdn/primeng/images/card-ng.jpg" 
    alt="Card Image" 
    class="w-full h-48 object-cover"
  />

  <!-- Card Content -->
  <div class="p-4">
    <!-- Title -->
    <h2 class="text-xl font-semibold text-gray-800">{{ item.name }}</h2>
    
    <!-- Subtitle -->
    <h3 class="text-sm text-gray-500 mb-2">{{ item.snippet }}</h3>
    
    <!-- Content -->
    <p v-if="isExpanded" class="text-gray-600 text-sm">
      {{item.details}}
    </p>
   </div>
</div>



    
</template>

<script setup>
import { ref } from "vue";

defineProps({
    item: {
        type: Object,
        required: true
    }
});

const isExpanded = ref(false);

const toggleDetails = () => {
    isExpanded.value = !isExpanded.value;
    console.log("click is working");
};

</script>

<style scoped>

</style>