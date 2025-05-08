import { createRouter, createWebHistory } from 'vue-router'
import ChatPage from '../components/ChatPage.vue'
import AboutMe from '../components/AboutMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/chat/:id/:name',
      name: 'chat',
      component: ChatPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMe 
    },
  ],
})

export default router
