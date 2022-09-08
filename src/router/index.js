import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Vue from 'vue'

// // use router
// Vue.use(router)



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/addTasks',
      name: 'addTasks',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/AddTasks.vue')
    },
    {
      path: '/TasksList',
      name: 'TasksList',
      component: () => import('../components/TasksList.vue')
    },
    {
      path: '/EditTasks/:id',
      name: 'EditTasks',
      params: true,
      component: () => import('../components/EditTasks.vue')
    }
  ]
})

export default router


