/**
 * Import needed modules
 * @type {String}
 */
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import { cookieNameCutter } from '@/libs'
/**
 * Import components
 * @type {String}
 */
import Dashboard from '@/components/Index'
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
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        // Applying middleware before going inside the sink hole.
        if (cookieNameCutter('b') && cookieNameCutter('tka') && cookieNameCutter('tkp') && cookieNameCutter('tks')) {
          next()
        }
      },
      children: [
        {
          path: 'login',
          name: 'DashboardLogin',
          component: DashboardLogin,
          beforeEnter: (to, from, next) => {
            next()
          }
        },
        {
          path: '',
          name: 'DashboardMain',
          component: DashboardMain,
          beforeEnter: (to, from, next) => {
            // Applying middleware before going inside the sink hole.
            if (cookieNameCutter('b') && cookieNameCutter('tka') && cookieNameCutter('tkp') && cookieNameCutter('tks')) {
              next()
            } else {
              next({ name: 'DashboardLogin' })
            }
          }
        },
        {
          path: 'address',
          name: 'DashboardAddress',
          component: DashboardAddress,
          beforeEnter: (to, from, next) => {
            // Check if user is kyc applied
            if (store.state.users.user.kyc_status && store.state.users.user.kyc_status !== 'Rejected') {
              // Proceed to next
              next()
            } else {
              // Proceed to kyc
              next({ name: 'DashboardKnowYourCustomer' })
            }
          }
        },
        {
          path: 'know-your-customer',
          name: 'DashboardKnowYourCustomer',
          component: DashboardKnowYourCustomer,
          beforeEnter: (to, from, next) => {
            // Applying middleware before going inside the sink hole.
            if (cookieNameCutter('b') && cookieNameCutter('tka') && cookieNameCutter('tkp') && cookieNameCutter('tks')) {
              next()
            } else {
              next({ name: 'DashboardLogin' })
            }
          }
        },
        {
          path: 'know-your-customer/application',
          name: 'DashboardKnowYourCustomerApplication',
          component: DashboardKnowYourCustomerApplication,
          beforeEnter: (to, from, next) => {
            // Applying middleware before going inside the sink hole.
            if (cookieNameCutter('b') && cookieNameCutter('tka') && cookieNameCutter('tkp') && cookieNameCutter('tks')) {
              next()
            } else {
              next({ name: 'DashboardLogin' })
            }
          }
        },
        {
          path: 'contribution',
          name: 'DashboardContribution',
          component: DashboardContribution,
          beforeEnter: (to, from, next) => {
            // Applying middleware before going inside the sink hole.
            if (cookieNameCutter('b') && cookieNameCutter('tka') && cookieNameCutter('tkp') && cookieNameCutter('tks')) {
              next()
            } else {
              next({ name: 'DashboardLogin' })
            }
          }
        },
        {
          path: 'referral-program',
          name: 'DashboardReferral',
          component: DashboardReferral,
          beforeEnter: (to, from, next) => {
            // Applying middleware before going inside the sink hole.
            if (cookieNameCutter('b') && cookieNameCutter('tka') && cookieNameCutter('tkp') && cookieNameCutter('tks')) {
              next()
            } else {
              next({ name: 'DashboardLogin' })
            }
          }
        },
        {
          path: 'promotion',
          name: 'DashboardPromotion',
          component: DashboardPromotion,
          beforeEnter: (to, from, next) => {
            // Applying middleware before going inside the sink hole.
            if (cookieNameCutter('b') && cookieNameCutter('tka') && cookieNameCutter('tkp') && cookieNameCutter('tks')) {
              next()
            } else {
              next({ name: 'DashboardLogin' })
            }
          }
        },
        {
          path: 'setting',
          name: 'DashboardSetting',
          component: DashboardSetting,
          beforeEnter: (to, from, next) => {
            // Applying middleware before going inside the sink hole.
            if (cookieNameCutter('b') && cookieNameCutter('tka') && cookieNameCutter('tkp') && cookieNameCutter('tks')) {
              next()
            } else {
              next({ name: 'DashboardLogin' })
            }
          }
        }
      ]
    }
  ]
})
