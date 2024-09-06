<script setup>
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue'
import IconDots from './icons/IconDots.vue'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})

const dateToday = new Date().toLocaleDateString('en-US', {
  month: 'long', // Full month name (e.g., September)
  day: 'numeric', // Numeric day (e.g., 9)
  year: 'numeric' // Full year (e.g., 2024)
})
</script>

<template>
  <div class="flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md h-fit">
    <div class="flex justify-between">
      <div class="flex">
        <img class="rounded-full size-10 me-2" src="../assets/profile.jpg" alt="user photo" />
        <div class="leading-5">
          <p class="font-semibold font">Carl Joseph Salac</p>
          <small class="text-gray-600">{{ dateToday }}</small>
        </div>
      </div>
      <div
        class="flex items-center justify-center p-1 rounded-full hover:bg-gray-100 hover:cursor-pointer"
      >
        <IconDots />
      </div>
    </div>

    <p class="font-semibold leading-5">
      <slot name="caption"></slot>
    </p>

    <div class="border border-gray-300 rounded-xl">
      <slot></slot>
    </div>
  </div>
</template>
