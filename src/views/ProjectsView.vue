<script setup>
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue'
import MyCard from '@/components/MyCard.vue'
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
        <template #caption>Internship Projects</template>
        <div class="flex flex-col items-center justify-between gap-5 p-5 md:flex-row">
          <MyCard url="https://cjs-csm.infinityfreeapp.com/">
            <img class="rounded-t-lg max-h-48" src="../assets/csm-ss.png" alt="" />
            <template #header> Client Satisfaction Measurement Feedback Form </template>
            <template #body>
              Web Application that will be used by the client after their transaction on a specific
              office in DepEd CALABARZON
            </template>
          </MyCard>
          <MyCard url="https://cjs-csm-admin.infinityfreeapp.com/">
            <img class="rounded-t-lg max-h-48" src="../assets/csm-admin-ss.png" alt="" />
            <template #header> Client Satisfaction Measurement Admin </template>
            <template #body>
              Admin Dashboard to analyze, visualize and download the data from Client Satisfaction
              Measurement Feedback Form
            </template>
          </MyCard>
        </div>
      </PostContainer>

      <PostContainer>
        <template #caption>Personal Projects</template>
        <div class="flex flex-col items-center justify-between gap-5 p-5">
          <div class="flex flex-col items-center justify-between w-full gap-5 md:flex-row">
            <MyCard url="https://cjs-university.infinityfreeapp.com/?i=1">
              <img class="rounded-t-lg max-h-52" src="../assets/cjs-university.png" alt="" />
              <template #header> CJS University </template>
              <template #body>
                Manage student records, download and upload student records in excel format. With
                Authentication and Authorization
              </template>
            </MyCard>
            <MyCard url="http://cjscms.infinityfreeapp.com/">
              <img class="rounded-t-lg max-h-52" src="../assets/cjs-cms.png" alt="" />
              <template #header> CJS CMS </template>
              <template #body>
                Content Management System with Authentication and Authorization using Laravel Breeze
                scaffolding
              </template>
            </MyCard>
          </div>
          <MyCard url="http://cjs-ems.infinityfreeapp.com/">
            <img class="rounded-t-lg max-h-52" src="../assets/ems.png" alt="" />
            <template #header> CJS EMS </template>
            <template #body>
              Employee Management System created using Laravel and jQuery AJAX for reactivity
            </template>
          </MyCard>
        </div>
      </PostContainer>

      <PostContainer>
        <template #caption>Capstone Project</template>
        <div class="flex items-center justify-center p-5">
          <MyCard url="https://github.com/carljosephsalac/chess-pain">
            <img class="rounded-t-lg max-h-52" src="../assets/chesspain.png" alt="" />
            <template #header> Chess Pain </template>
            <template #body>
              An offline chess tutorial and chess puzzle Android application that teaches techniques
              and strategies for playing chess.
            </template>
          </MyCard>
        </div>
      </PostContainer>
    </div>
  </main>
</template>
