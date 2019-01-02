import Vue from 'vue'
import Router from 'vue-router'

import Home from './routes/Home.vue'
import About from './routes/About.vue'
import Menu from './routes/Menu.vue'

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
      path: '/menu/:id',
      name: 'menu',
      component: Menu
    }
  ]
})
