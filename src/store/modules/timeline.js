/**
 * Kyc store module
 */
import axios from 'axios'
import {timeline} from '@/api'

/**
 * @const state
 * @type {object}
 */
const state = {
  timeline: null
}

/**
 * @const actions
 * @type {object}
 */
const actions = {
  /**
  * Get timeline
  * @param  context
  * @return {Promise}
  */
  getTimeline: async (context) => {
    try {
      var resp = await axios.get(timeline.timeline)
      context.commit('setTimeline', resp.data.data)
    } catch (error) {
      context.commit('setTimeline', null)
    }
  }
}

/**
 * @const mutations
 * @type {object}
 */
const mutations = {
  /**
     * Set timeline state
     * @param state
     * @param payload
     */
  setTimeline: (state, payload) => {
    state.timeline = payload
  }
}

export default {state, actions, mutations}
