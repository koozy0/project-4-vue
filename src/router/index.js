import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '../components/Homepage'
import Camera from '../components/Camera'
import Profile from '../components/Profile'
import Register from '../components/Register'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/camera',
      name: 'camera',
      component: Camera
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
