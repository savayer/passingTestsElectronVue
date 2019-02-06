import Vue from 'vue'
import Vuex from 'vuex'

/* import { createPersistedState, createSharedMutations } from 'vuex-electron' */

/* import modules from './modules' */

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uploadedObjectTest: []
  },
  mutations: {
    SET_TEST (state, data) {
      state.uploadedObjectTest = data
    }
  },
  actions: {
    setTest (context, data) {
      context.commit('SET_TEST', data)
    }
  },
  getters: {
    getTest (state) {
      return state.uploadedObjectTest
    }
  },
  /* modules,
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ], */
  strict: process.env.NODE_ENV !== 'production'
})
