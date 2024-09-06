<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import NavBar from './components/NavBar.vue'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />

    <RouterView />
  </div>
</template>
