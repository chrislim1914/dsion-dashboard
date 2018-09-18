import Vue from 'vue'
import Vuex from 'vuex'

/**
 * modules import
 */
import users from './modules/users'
import sales from './modules/sales'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    users,
    sales
  }
})
