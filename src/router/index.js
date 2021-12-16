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
  },
  {
    path: '/switch',
    name: 'Switch',
    component: () => import('../views/switch.vue')
  },
  {
    path: '/radio',
    name: 'Radio',
    component: () => import('../views/radio.vue')
  },
  {
    path: '/checkbox',
    name: 'CheckBox',
    component: () => import('../views/checkbox.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/form.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
