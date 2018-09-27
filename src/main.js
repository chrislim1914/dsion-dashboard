// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueAWN from 'vue-awesome-notifications'
import VueClipboard from 'vue-clipboard2'
import VueQriously from 'vue-qriously'
import router from './router'
import store from './store'
import './filters'
import { shifters, cookieNameCutter } from './libs'

require('vue-awesome-notifications/dist/styles/style.css')

Vue.config.productionTip = false

Vue.use(VueAWN)
Vue.use(VueClipboard)
Vue.use(VueQriously)

router.beforeEach((to, from, next) => {
  // Applying middleware before going inside the sink hole.
  if (cookieNameCutter('b') && cookieNameCutter('tka') && cookieNameCutter('tkp') && cookieNameCutter('tks')) {
    // Metamorphosis controller
    var metaController = -cookieNameCutter('b')
    // Creating the monster
    var cookieMonster = shifters(cookieNameCutter('tka'), metaController) + '.' +
                        shifters(cookieNameCutter('tkp'), metaController) + '.' +
                        shifters(cookieNameCutter('tks'), metaController)
    store.dispatch('saveToken', { token: cookieMonster })
    store.dispatch('fetchUserInfo', { token: cookieMonster }).then(() => {
      next()
    })
  } else {
    next(new Error('Please login to proceed.'))
  }
})

router.onError(err => {
  alert(err)
  window.location.href = 'https://dsion.io'
  // window.location.href = 'http://localhost:8081'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
