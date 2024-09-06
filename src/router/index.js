import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import SkillsView from '@/views/SkillsView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Scroll to saved position (useful for "back" navigation)
    if (savedPosition) {
      return savedPosition
    } else {
      // Scroll to top when navigating to a new route
      return { top: 0 }
    }
  }
})

export default router
