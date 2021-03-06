import Vue from 'vue'
import Router from 'vue-router'

import Home from './routes/Home.vue'
import About from './routes/About.vue'
import Menu from './routes/Menu.vue'
import Error404 from './routes/Error404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '*',
      name: 'error404',
      component: Error404
    }
  ]
})
