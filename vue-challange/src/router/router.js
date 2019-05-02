import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/',
      component: Home,
      props: true,
      meta: { title: 'VueChallenge' }
    }
  ]
})

export default router
