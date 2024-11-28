<template lang="">
    <div class="flex flex-row justify-center gap-3 ">
        <div v-for= "item in items" :key="item.id">
            <SearchItem :item="item" /> <!--attribute binding -->
        </div>
    </div>
</template>
<script setup>
import SearchItem from './SearchItem.vue';  
import { ref } from 'vue';

const items = ref([
  { id: 1, name: "John Doe", snippet: "Hey this is John Doe", details: "This is a longer description for John Doe." },
  { id: 2, name: "Sam Doe", snippet: "Hey this is Sam Doe", details: "This is a longer description for Sam Doe." },
  { id: 3, name: "Beam Doe", snippet: "Hey this is Beam Doe", details: "This is a longer description for Beam Doe." }
]);
</script>
<style scoped>

</style>