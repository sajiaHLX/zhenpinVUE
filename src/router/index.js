import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home'
import Login from 'views/login/Login'
import Vip from 'views/vip/Vip'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/login',
    name: 'login',
    component: Login
  },
  {
    path:'/vip',
    name: 'Vip',
    component: Vip,
    meta:'true'
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
