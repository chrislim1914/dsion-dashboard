// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueAWN from 'vue-awesome-notifications'
import VueClipboard from 'vue-clipboard2'
import VueQriously from 'vue-qriously'
import i18n from './localization'
import router from './router'
import store from './store'
import './filters'
import { shifters, pickANumber, cookieNameCutter } from './libs'
import { jwtHeader } from './config'
import moment from 'moment'

require('vue-awesome-notifications/dist/styles/style.css')
var VueCookie = require('vue-cookie')

Vue.config.productionTip = false
Vue.prototype.moment = moment

Vue.use(VueAWN)
Vue.use(VueClipboard)
Vue.use(VueQriously)
Vue.use(VueCookie)

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
      if (store.state.users.responseData === 'Token has expired') {
        store.dispatch('getUserNewToken', { token: cookieMonster }).then(() => {
          if (store.state.users.responseData === 'token_invalid' || store.state.users.responseData.result === false) {
            alert('Please login again.')
            // Expire cookies
            VueCookie.delete('tka', {domain: '.dsion.io'})
            VueCookie.delete('tkp', {domain: '.dsion.io'})
            VueCookie.delete('tks', {domain: '.dsion.io'})
            VueCookie.delete('b', {domain: '.dsion.io'})
            // window.location.href = 'http://localhost:8081'
            window.location.href = 'https://dsion.io'
          } else {
            // The boooody
            var tk = jwtHeader + 'eyJ' + store.state.users.responseData.token.slice(3)
            // Surprise them all
            var surprise = pickANumber()
            // Shifting shifters to shifted
            var shifted = shifters(tk, surprise).split('.')
            VueCookie.set('tka', shifted[0], {expires: 1, domain: '.dsion.io'})
            VueCookie.set('tkp', shifted[1], {expires: 1, domain: '.dsion.io'})
            VueCookie.set('tks', shifted[2], {expires: 1, domain: '.dsion.io'})
            VueCookie.set('b', surprise, {expires: 1, domain: '.dsion.io'})
          }
        })
      } else if (store.state.users.responseData === 'token_invalid') {
        alert('Please login again.')
        // Expire cookies
        VueCookie.delete('tka', {domain: '.dsion.io'})
        VueCookie.delete('tkp', {domain: '.dsion.io'})
        VueCookie.delete('tks', {domain: '.dsion.io'})
        VueCookie.delete('b', {domain: '.dsion.io'})
        // window.location.href = 'http://localhost:8081'
        window.location.href = 'https://dsion.io'
      }

      next()
    })
  } else {
    next(new Error('Please login to proceed.'))
  }
})

router.onError(err => {
  console.log(err)
  window.location.href = 'https://dsion.io'
  // window.location.href = 'http://localhost:8081'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
