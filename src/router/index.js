import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'income',
    component: () => import(/* webpackChunkName: "income" */ '../views/Income.vue')
  },
  {
    path: '/outcome',
    name: 'outcome',
    component: () => import(/* webpackChunkName: "outcome" */ '../views/Outcome.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
