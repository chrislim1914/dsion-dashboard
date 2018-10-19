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
  activeSale: [],
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
  /**
      * Fetch active sale
      * @param  context
      * @param  payload
      * @return {Promise}
      */
  fetchActiveSale: async (context) => {
    try {
      var resp = await axios.get(sales.getActiveSale)
      context.commit('setActiveSale', resp.data)
      context.commit('updateResponseMessage', resp.data)
    } catch (error) {
      context.commit('updateResponseMessage', 'General Error')
    }
  },
  /**
    * Fetch total sales
    * @param  context
    * @return {Promise}
    */
  fetchTotalSales: async (context) => {
    try {
      var resp = await axios.get(sales.getTotalSales)
      context.commit('updateResponseMessage', resp.data)
    } catch (error) {
      context.commit('updateResponseMessage', 'General Error')
    }
  }
}

const getters = {
  pendingSale: (state) => {
    return state.sales.filter(sale => sale.status === 2)
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
   * Set active sale state
   * @param state
   * @param data
   */
  setActiveSale: (state, data) => {
    state.activeSale = data
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
