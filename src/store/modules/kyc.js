/**
 * Kyc store module
 */
import axios from 'axios'
import {
  kyc
} from '@/api'

/**
 * @const state
 * @type {object}
 */
const state = {
  kyc: {},
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
  signupKycPersonal: async (context, payload) => {
    try {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload.get('token')
      var resp = await axios.post(kyc.signupPersonal, payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      context.commit('updateResponseMessage', resp.data)
    } catch (error) {
      console.log(error)
      context.commit('updateResponseMessage', 'General Error')
    }
  },
  signupKycBusiness: async (context, payload) => {
    try {
      var resp = await axios.post(kyc.signupBusiness, payload)
      context.commit('updateResponseMessage', resp.data)
    } catch (error) {
      context.commit('updateResponseMessage', 'General Error')
    }
  }
}

/**
 * @const mutations
 * @type {object}
 */
const mutations = {
  /**
     * Set kyc state
     * @param state
     * @param data
     */
  setUser: (state, data) => {
    state.kyc = data
  },

  /**
     * Update response message state
     * @param state
     * @param status
     */
  updateResponseMessage: (state, status) => {
    state.responseData = status
  }
}

export default {state, actions, mutations}
