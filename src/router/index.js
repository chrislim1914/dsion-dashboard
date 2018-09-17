import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Kyc from '@/components/Kyc'
import KycApplication from '@/components/KycApplication'
import KycStatus from '@/components/KycStatus'
import Referral from '@/components/Referral'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/kyc',
      name: 'Kyc',
      component: Kyc
    },
    {
      path: '/kyc-application',
      name: 'KycApplication',
      component: KycApplication
    },
    {
      path: '/kyc-status',
      name: 'KycStatus',
      component: KycStatus
    },
    {
      path: '/referral',
      name: 'Referral',
      component: Referral
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
