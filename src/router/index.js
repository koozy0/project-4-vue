import Vue from 'vue'
import Router from 'vue-router'

import Camera from '../components/Camera'
import Profile from '../components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/camera',
      name: 'camera',
      component: Camera
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
