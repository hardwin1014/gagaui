import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Page',
    component: () => import('../views/page.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('../views/button.vue')
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: () => import('../views/dialog.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import('../views/input.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
