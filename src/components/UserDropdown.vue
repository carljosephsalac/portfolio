<script setup>
import IconFacebook from './icons/IconFacebook.vue'
import IconGithub from './icons/IconGithub.vue'
import IconGmail from './icons/IconGmail.vue'
import IconLinkedIn from './icons/IconLinkedIn.vue'
</script>

<template>
  <button
    type="button"
    class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    id="user-menu-button"
    aria-expanded="false"
    data-dropdown-toggle="user-dropdown"
    data-dropdown-placement="bottom"
    data-tooltip-target="tooltip-left"
    data-tooltip-placement="left"
  >
    <span class="sr-only">Open user menu</span>
    <img class="w-10 h-10 rounded-full" src="../assets/profile.jpg" alt="user photo" />
  </button>
  <!-- Tooltip -->
  <div
    id="tooltip-left"
    role="tooltip"
    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
  >
    Contacts
    <div class="tooltip-arrow" data-popper-arrow></div>
  </div>
  <!-- Dropdown menu -->
  <div
    class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
    id="user-dropdown"
  >
    <ul class="py-2" aria-labelledby="user-menu-button">
      <li>
        <a
          href="mailto: salaccarljoseph@gmail.com"
          class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          <IconGmail />
          Gmail
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/carl15joseph"
          target="_blank"
          class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          <IconFacebook />
          Facebook
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/carl-joseph-salac-800584200/"
          target="_blank"
          class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          <IconLinkedIn />
          LinkedIn
        </a>
      </li>
    </ul>
    <div class="py-2">
      <a
        href="https://github.com/carljosephsalac"
        target="_blank"
        class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
      >
        <IconGithub />
        Github
      </a>
    </div>
  </div>
</template>
