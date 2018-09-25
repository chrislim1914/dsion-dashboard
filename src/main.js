// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueSession from 'vue-session'
import VueAWN from 'vue-awesome-notifications'
import VueClipboard from 'vue-clipboard2'
import VueQriously from 'vue-qriously'
import router from './router'
import store from './store'
import './filters'

var VueCookie = require('vue-cookie')

require('vue-awesome-notifications/dist/styles/style.css')

Vue.config.productionTip = false

var options = {
  persist: true
}

Vue.use(VueCookie)
Vue.use(VueSession, options)
Vue.use(VueAWN)
Vue.use(VueClipboard)
Vue.use(VueQriously)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
