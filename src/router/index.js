import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/page/index/home.vue'
import login from '@/components/page/login/login.vue'
import register from '@/components/page/login/register.vue'
import resetPassword from '@/components/page/login/resetPassword.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/reg',
      component: register
    },
    {
      path: '/forget',
      component: resetPassword
    }
  ]
})
