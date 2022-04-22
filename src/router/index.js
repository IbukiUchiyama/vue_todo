import { createRouter, createWebHistory } from 'vue-router'
import Todo from '@/components/TodoList.vue'
import login from '@/components/LoginPage'
import Resister from '@/components/ResisterPage'


let router =  createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '/login',
      name: 'Login',
      component: login,
    },
    {
      path: '/resister',
      name: 'Resister',
      component: Resister
    }
  ]
})

export default router
