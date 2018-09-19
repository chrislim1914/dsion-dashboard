/**
 * Sales store module
 */
import axios from 'axios'
import {
  sales
} from '@/api'

/**
 * @const state
 * @type {object}
 */
const state = {
  sales: [],
  responseData: {}
}

/**
 * @const actions
 * @type {object}
 */
const actions = {
  /**
      * Fetch all sale status
      * @param  context
      * @param  payload
      * @return {Promise}
      */
  fetchAllSaleStatus: async (context) => {
    try {
      var resp = await axios.get(sales.getAllSalesStatus)
      context.commit('setSalesStatus', resp.data)
    } catch (error) {
      context.commit('updateResponseMessage', 'General Error')
    }
  },
  fetchTotalSales: async (context) => {
    try {
      var resp = await axios.get(sales.getTotalSales)
      context.commit('updateResponseMessage', resp.data)
    } catch (error) {
      context.commit('updateResponseMessage', 'General Error')
    }
  }
}

/**
 * @const getters
 * @type {Object}
 */

const getters = {
  activeSale: state => {
    return state.sales.filter(sale => sale.status === 1)
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
  setSalesStatus: (state, data) => {
    state.sales = data
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

export default {state, actions, getters, mutations}
