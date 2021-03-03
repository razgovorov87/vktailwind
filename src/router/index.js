import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    meta: {layout: 'auth'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  
  {
    path: '/im',
    name: 'Messages',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Messages.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
