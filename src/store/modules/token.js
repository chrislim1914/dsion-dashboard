/**
 * Token store module
 */

/**
 * @const state
 * @type {object}
 */
const state = {
  token: [],
  responseData: {}
}

/**
 * @const actions
 * @type {object}
 */
const actions = {
  /**
   * [saveToken description]
   * @param  {[type]} context [description]
   * @param  {[type]} payload [description]
   * @return {[type]}         [description]
   */
  saveToken: (context, payload) => {
    if (payload) {
      context.commit('SET_TOKEN', payload.token)
    } else {
      context.commit('UPDATE_RESPONSE_MESSAGE', 'Token empty.')
    }
  }
}

/**
 * @const mutations
 * @type {object}
 */
const mutations = {
  /**
     * Set misc state
     * @param state
     * @param data
     */
  SET_TOKEN: (state, data) => {
    state.token = data
  },

  /**
     * Update response message state
     * @param state
     * @param status
     */
  UPDATE_RESPONSE_MESSAGE: (state, status) => {
    state.responseData = status
  }
}

export default {state, actions, mutations}
