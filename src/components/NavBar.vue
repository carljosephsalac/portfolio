<script setup>
import IconHome from './icons/IconHome.vue'
import UserDropdown from './UserDropdown.vue'
import IconHomeSolid from './icons/IconHomeSolid.vue'
import NavLink from './NavLink.vue'
import IconCode from './icons/IconCode.vue'
import IconProjects from './icons/IconProjects.vue'
import IconProjectsSolid from './icons/IconProjectsSolid.vue'
</script>

<template>
  <nav class="fixed z-10 w-full bg-white border-gray-200 shadow-md dark:bg-gray-900">
    <div class="relative flex items-center justify-between w-full px-4 py-1">
      <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/c-logo.png" class="h-10" alt="C Logo" />
      </RouterLink>

      <div class="items-center justify-between md:flex" id="navbar-search">
        <div class="grid h-full max-w-lg grid-cols-3 mx-auto place-items-center">
          <NavLink
            to="/"
            route-name="home"
            tooltip-id="home"
            tooltip-text="Home"
            :icon="IconHome"
            :active-icon="IconHomeSolid"
          />

          <NavLink
            to="/skills"
            route-name="skills"
            tooltip-id="skills"
            tooltip-text="Skills/Tech Stack"
            :icon="IconCode"
            :active-icon="IconCode"
          />

          <NavLink
            to="/projects"
            route-name="projects"
            tooltip-id="projects"
            tooltip-text="Projects"
            :icon="IconProjects"
            :active-icon="IconProjectsSolid"
          />
        </div>
      </div>

      <div class="flex md:order-3">
        <UserDropdown />
      </div>
    </div>
  </nav>
</template>
