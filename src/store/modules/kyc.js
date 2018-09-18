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
  kyc: [],
  responseData: {}
}

/**
 * @const actions
 * @type {object}
 */
const actions = {
  /**
      * Post kyc application
      * @param  context
      * @param  payload
      * @return {Promise}
      */
  storeKycApplication: async (context, payload) => {
    try {
<<<<<<< HEAD
=======
      console.log(payload.get('docfront'))
      console.log(payload.get('docback'))
      console.log(payload.get('selfie'))

>>>>>>> 72ac44132b20d52df77cae52897ada987734eb12
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload.get('token')
      var resp = await axios.post(kyc.postKycApplication, payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      context.commit('updateResponseMessage', resp.data)
<<<<<<< HEAD
=======

>>>>>>> 72ac44132b20d52df77cae52897ada987734eb12
    } catch (error) {
      console.log(error)
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
     * Update response message state
     * @param state
     * @param status
     */
  updateResponseMessage: (state, status) => {
    state.responseData = status
  }
}

export default {state, actions, mutations}
