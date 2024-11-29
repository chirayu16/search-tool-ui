<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="n in 8" :key="n" class="animate-pulse bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-lg">
            <div class="h-48 bg-zinc-300 dark:bg-zinc-600 rounded-md"></div>
            <div class="mt-4 space-y-3">
                <div class="h-6 bg-zinc-300 dark:bg-zinc-600 rounded-md"></div>
                <div class="h-4 bg-zinc-300 dark:bg-zinc-600 rounded-md w-3/4"></div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
<style></style>