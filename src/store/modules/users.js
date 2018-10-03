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
      context.commit('setUser', resp.data)
    } catch (error) {
      console.log(error.response)
      if (error.response.status === 401 || error.response.data.message === 'Token has expired') {
        console.log('u1 f')
        context.commit('updateResponseData', error.response.data.message)
      } else if (error.response.data.message === 'token_invalid') {
        context.commit('updateResponseData', error.response.data.message)
      }
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
  },
  getUserContribution: async (context, payload) => {
    try {
      var resp = await axios.post(user.getContribution + payload.iduser, payload)
      context.commit('updateResponseData', resp.data)
    } catch (error) {
      context.commit('updateResponseData', 'General Error')
    }
  },
  getUserNewToken: async (context, payload) => {
    try {
      console.log(payload)
      var resp = await axios.post(user.refreshToken, payload)
      context.commit('updateResponseData', resp.data)
    } catch (error) {
      console.log(error.response)
      if (error.response.status === 401 || error.response.data.message === 'Token has expired') {
        console.log('u2 f')
        context.commit('updateResponseData', error.response.data.message)
      } else if (error.response.data.message === 'token_invalid') {
        context.commit('updateResponseData', error.response.data.message)
      }
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
