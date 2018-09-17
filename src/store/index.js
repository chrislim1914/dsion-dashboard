import Vue from 'vue'
import Vuex from 'vuex'

/**
 * modules import
 */
import users from './modules/users'
import kyc from './modules/kyc'
import sales from './modules/sales'
import newsandmedia from './modules/newsandmedia'
import timeline from './modules/timeline'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    users,
    kyc,
    sales,
    newsandmedia,
    timeline
  }
})
