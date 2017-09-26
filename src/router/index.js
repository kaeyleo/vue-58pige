import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/page/index/home.vue'
import login from '@/components/page/login/login.vue'
import register from '@/components/page/login/register.vue'
import resetPassword from '@/components/page/login/resetPassword.vue'
import detail from '@/components/page/detail/detail.vue'
import profile from '@/components/page/profile/profile.vue'
import info from '@/components/page/profile/children/info.vue'
import shopEdit from '@/components/page/profile/children/shopEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/',
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
    },
    {
      path: '/detail',
      component: detail
    },
    {
      path: '/profile',
      component: profile,
      children: [
        {
          path: 'info',
          component: info
        },
        {
          path: 'shopEdit',
          component: shopEdit
        }
      ]
    }
  ]
})
