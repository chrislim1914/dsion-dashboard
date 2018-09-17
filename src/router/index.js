import Vue from 'vue'
import Router from 'vue-router'
import DashboardLogin from '@/components/Login'
import DashboardMain from '@/components/Dashboard'
import DashboardAddress from '@/components/Address'
import DashboardKnowYourCustomer from '@/components/Kyc'
import DashboardKnowYourCustomerApplication from '@/components/KycApplication'
import DashboardContribution from '@/components/Contribution'
import DashboardReferral from '@/components/Referral'
import DashboardSetting from '@/components/Setting'
import DashboardPromotion from '@/components/Promotion'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'DashboardLogin',
      component: DashboardLogin
    },
    {
      path: '/dashboard',
      name: 'DashboardMain',
      component: DashboardMain
    },
    {
      path: '/address',
      name: 'DashboardAddress',
      component: DashboardAddress
    },
    {
      path: 'know-your-customer',
      name: 'DashboardKnowYourCustomer',
      component: DashboardKnowYourCustomer
    },
    {
      path: 'know-your-customer/application',
      name: 'DashboardKnowYourCustomerApplication',
      component: DashboardKnowYourCustomerApplication
    },
    {
      path: 'contribution',
      name: 'DashboardContribution',
      component: DashboardContribution
    },
    {
      path: 'referral-program',
      name: 'DashboardReferral',
      component: DashboardReferral
    },
    {
      path: 'promotion',
      name: 'DashboardPromotion',
      component: DashboardPromotion
    },
    {
      path: 'setting',
      name: 'DashboardSetting',
      component: DashboardSetting
    }
  ]
})
