<script setup>
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue'
import PostContainer from '@/components/PostContainer.vue'
import IconQuote from '@/components/icons/IconQuote.vue'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <main class="flex flex-col items-center flex-grow h-auto pt-20 pb-10 bg-gray-100">
    <div class="flex flex-col w-full max-w-4xl gap-6">
      <PostContainer>
        <template #caption>About Me</template>
        <section
          class="rounded-xl bg-gradient-to-r from-gray-50 to-gray-200 hover:cursor-pointer hover:bg-gradient-to-l hover:from-gray-50 hover:to-gray-200"
        >
          <div class="max-w-screen-xl px-4 py-6 mx-auto text-center lg:py-12">
            <h1
              class="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-8xl dark:text-white"
            >
              Hi, I'm Carl!
            </h1>

            <blockquote
              class="text-lg italic font-semibold text-gray-900 lg:text-xl dark:text-white"
            >
              <p>
                I graduated at University of Rizal System Cainta with the degree of Bachelor of
                Science in Information Technology. I am passionate about software development and
                continuously learning various technologies to build user-friendly and robust
                applications.
              </p>
            </blockquote>
          </div>
        </section>
      </PostContainer>
      <PostContainer>
        <template #caption>What I'm Currently Working On </template>
        <section
          class="rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-200 hover:cursor-pointer bg-gradient-to-l from-gray-50 to-gray-200"
        >
          <div class="max-w-screen-xl px-4 py-6 mx-auto text-center lg:py-12">
            <blockquote
              class="text-lg italic font-semibold text-gray-900 lg:text-xl dark:text-white"
            >
              <IconQuote />
              <p>
                "I'm currently looking for an entry-level or junior web developer role. While I
                wait, I'm improving my skills by building web applications and learning new
                technologies. Right now, I'm exploring
                <span class="text-green-500">Vue.js</span> and adding it to my main stack, which
                includes <span class="text-orange-500">Laravel</span> and
                <span class="text-sky-400">Tailwind</span>. I enjoy learning and working on real
                projects to keep up with the latest trends and build better applications."
              </p>
            </blockquote>
          </div>
        </section>
      </PostContainer>
    </div>
  </main>
</template>
