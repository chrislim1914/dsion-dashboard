/**
 * Users store module
 */
import axios from 'axios'

import {
  user
} from '@/api'

/**
 * @const state
 * @type {object}
 */
const state = {
  user: {},
  responseData: {}
}

/**
 * @const actions
 * @type {object}
 */
const actions = {
  /**
      * Create user
      * @param  context
      * @param  payload
      * @return {Promise}
      */
  signinUser: async (context, payload) => {
    try {
      var resp = await axios.post(user.signin, payload)
      context.commit('updateResponseData', resp.data)
    } catch (error) {
      context.commit('updateResponseData', 'General Error')
    }
  },
  signupUser: async (context, payload) => {
    try {
      var resp = await axios.post(user.signup, payload)
      context.commit('updateResponseData', resp.data)
    } catch (error) {
      context.commit('updateResponseData', 'General Error')
    }
  },
  logoutUser: async (context, payload) => {
    try {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload.token
      var resp = await axios.post(user.logout, payload)
      context.commit('updateResponseData', resp.data)
    } catch (error) {
      context.commit('updateResponseData', 'General Error')
    }
  },
  fetchUserInfo: async (context, payload) => {
    try {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload.token
      var resp = await axios.post(user.getInfo)
      context.commit('updateResponseData', resp.data)
    } catch (error) {
      context.commit('updateResponseData', 'General Error')
    }
  },
  authenticateGoogle: async (context, payload) => {
    try {
      var resp = await axios.post(user.googleLogin, payload)
      context.commit('updateResponseData', resp.data)
    } catch (error) {
      context.commit('updateResponseData', 'General Error')
    }
  },
  changeUserPassword: async (context, payload) => {
    try {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload.token
      var resp = await axios.post(user.changePassword, payload)
      context.commit('updateResponseData', resp.data)
    } catch (error) {
      context.commit('updateResponseData', 'General Error')
    }
  },
  changeUserWalletAddress: async (context, payload) => {
    try {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload.token
      var resp = await axios.post(user.changeWalletAddress, payload)
      context.commit('updateResponseData', resp.data)
    } catch (error) {
      context.commit('updateResponseData', 'General Error')
    }
  }
}

/**
 * @const mutations
 * @type {object}
 */
const mutations = {
  /**
     * Set user state
     * @param state
     * @param data
     */
  setUser: (state, data) => {
    state.user = data
  },

  /**
     * Update response message state
     * @param state
     * @param status
     */
  updateResponseData: (state, status) => {
    state.responseData = status
  }
}

export default {state, actions, mutations}
