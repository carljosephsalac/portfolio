<script setup>
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue'
import IconHTML from '@/components/icons/IconHTML.vue'
import IconCSS from '@/components/icons/IconCSS.vue'
import IconJS from '@/components/icons/IconJS.vue'
import IconLaravel from '@/components/icons/IconLaravel.vue'
import IconPHP from '@/components/icons/IconPHP.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import IconVue from '@/components/icons/IconVue.vue'
import IconBootstrap from '@/components/icons/IconBootstrap.vue'
import IconJquery from '@/components/icons/IconJquery.vue'
import IconFlowbite from '@/components/icons/IconFlowbite.vue'
import IconDaisyUI from '@/components/icons/IconDaisyUI.vue'
import PostContainer from '@/components/PostContainer.vue'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <main class="flex flex-col items-center flex-grow h-auto pt-20 pb-10 bg-gray-100">
    <div class="flex flex-col w-full max-w-4xl gap-6">
      <PostContainer>
        <template #caption>Languages</template>
        <div class="grid grid-cols-2 gap-6 p-2 md:grid-cols-3">
          <div class="flex flex-col items-center justify-center">
            <IconHTML />
            <span class="font-bold">HTML</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <IconCSS />
            <span class="font-bold">CSS</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <IconJS />
            <span class="font-bold">JavaScript</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <IconPHP />
            <span class="font-bold">PHP</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <img class="sm:size-40 size-32" src="../assets/sql-icon.svg" alt="" />
            <span class="font-bold">SQL</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <img class="sm:size-40 size-32" src="../assets/java-icon.svg" alt="" />
            <span class="font-bold">Java</span>
          </div>
        </div>
      </PostContainer>

      <PostContainer>
        <template #caption>Libraries/Frameworks</template>
        <div class="grid grid-cols-2 gap-6 p-2 md:grid-cols-3">
          <div class="flex flex-col items-center justify-center">
            <IconLaravel />
            <span class="font-bold">Laravel</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <IconTailwind />
            <span class="font-bold">Tailwind</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <IconVue />
            <span class="font-bold">Vue.js</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <IconBootstrap />
            <span class="font-bold">Bootstrap</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <IconJquery />
            <span class="font-bold">jQuery</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <IconFlowbite />
            <span class="font-bold">Flowbite</span>
          </div>
          <div class="flex flex-col items-center justify-center col-span-2 md:col-span-3">
            <IconDaisyUI />
            <span class="font-bold">daisyUI</span>
          </div>
        </div>
      </PostContainer>
    </div>
  </main>
</template>
