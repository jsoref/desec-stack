import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signup/:email?',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
  },
  {
    path: '/dynsetup/:domain?',
    name: 'dynsetup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/DynSetup.vue')
  },
  {
    path: '/welcome/:domain?',
    name: 'welcome',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Welcome.vue')
  },
  {
    path: '//desec.readthedocs.io/',
    name: 'docs',
    beforeEnter(to) { location.href = to.path },
  },
  {
    path: '/reset-password/:email?',
    name: 'reset-password',
    component: () => import(/* webpackChunkName: "signup" */ '../views/ResetPassword.vue')
  },
  {
    path: '/donate/',
    name: 'donate',
    component: () => import('../views/Donate.vue')
  },
  {
    path: '/impressum/',
    name: 'impressum',
    component: () => import('../views/Impressum.vue')
  },
  {
    path: '/privacy-policy/',
    name: 'privacy-policy',
    component: () => import('../views/PrivacyPolicy.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
