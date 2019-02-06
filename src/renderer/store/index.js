import Vue from 'vue'
import Vuex from 'vuex'

/* import { createPersistedState, createSharedMutations } from 'vuex-electron' */

/* import modules from './modules' */

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uploadedObjectTest: [],
    testInformation: {}
  },
  mutations: {
    SET_TEST (state, data) {
      state.uploadedObjectTest = data
    },
    SET_TEST_INFO (state, data) {
      state.testInformation = data
    }
  },
  actions: {
    setTest (context, data) {
      context.commit('SET_TEST', data)
    },
    setTestInfo (context, data) {
      context.commit('SET_TEST_INFO', data)
    }
  },
  getters: {
    getTest (state) {
      return state.uploadedObjectTest
    },
    getTestInfo (state) {
      return state.testInformation
    }
  },
  /* modules,
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ], */
  strict: process.env.NODE_ENV !== 'production'
})
