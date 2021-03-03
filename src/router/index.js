import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from '../plugins/vuetify'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'transactions.index',
    component: () => import(/* webpackChunkName: "income" */ '../views/Transactions/Index.vue'),
    meta: {
      title: 'transactions.index',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // update page title
  const nearestWithTitle = to.matched.slice()
      .reverse()
      .find(r => r.meta && r.meta.title)

  // let app = router.app
  if (nearestWithTitle)
    document.title = vuetify.framework.lang.translator(nearestWithTitle.meta.title)

  next()
})

export default router
