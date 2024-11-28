<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="n in 8" :key="n" class="animate-pulse bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-lg">
        <div class="h-48 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
        <div class="mt-4 space-y-3">
          <div class="h-6 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
          <div class="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-3/4"></div>
        </div>
      </div>
    </div>
  </template>
  
<script setup>

</script>
<style lang="">
    
</style>