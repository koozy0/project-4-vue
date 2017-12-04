import Vue from 'vue'
import Router from 'vue-router'

import Camera from '../components/Camera'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'camera',
      component: Camera
    }
  ]
})
