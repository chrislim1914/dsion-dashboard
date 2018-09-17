/**
 * Users store module
 */
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

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
      console.log(error)
      context.commit('updateResponseData', 'General Error')
    }
  },
  authenticateGoogle: async (context) => {
    try {
      var resp = await axios.get('https://api.dsion.io/google', {adapter: jsonpAdapter})
      console.log(JSON.stringify(resp))
      context.commit('updateResponseData', resp.data)
      console.log('success')
    } catch (error) {
      console.log('error')
      console.log(error)
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
