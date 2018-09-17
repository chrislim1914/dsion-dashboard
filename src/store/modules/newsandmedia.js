/**
 * News and media store module
 */
import axios from 'axios'
import {
  newsandmedia
} from '@/api'

/**
 * @const state
 * @type {object}
 */
const state = {
  newsandmedia: {},
  responseData: {}
}

/**
 * @const actions
 * @type {object}
 */
const actions = {
  /**
      * Subscribe an email
      * @param  context
      * @param  payload
      * @return {Promise}
      */
  subscribe: async (context, payload) => {
    try {
      var resp = await axios.post(newsandmedia.subscribe, payload)
      context.commit('updateResponseMessage', resp.data)
    } catch (error) {
      console.log(error)
      context.commit('updateResponseMessage', 'General Error')
    }
  },
  /**
      * Fetch all news
      * @param  context
      * @param  payload
      * @return {Promise}
      */
  fetchAllNews: async (context) => {
    try {
      var resp = await axios.get(newsandmedia.getAllNews)
      context.commit('updateResponseMessage', resp.data)
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
     * Set sale status state
     * @param state
     * @param data
     */
  setNewsAndMedia: (state, data) => {
    state.newsandmedia = data
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
