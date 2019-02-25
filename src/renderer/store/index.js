import Vue from 'vue'
import Vuex from 'vuex'

/* import { createPersistedState, createSharedMutations } from 'vuex-electron' */

/* import modules from './modules' */

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uploadedObjectTest: [],
    testInformation: {},
    currentQuestion: 1,
    result: 0,
    studentName: '',
    passportData: ''
  },
  mutations: {
    SET_TEST (state, data) {
      state.uploadedObjectTest = data
    },
    SET_TEST_INFO (state, data) {
      state.testInformation = data
    },
    SET_CURRENT_QUESTION (state, data) {
      state.currentQuestion = data
    },
    INCREMENT_RESULT (state) {
      state.result++
    },
    SET_NAME (state, data) {
      state.studentName = data
    },
    SET_PASSPORT (state, data) {
      state.passportData = data
    }
  },
  actions: {
    setTest (context, data) {
      context.commit('SET_TEST', data)
    },
    setTestInfo (context, data) {
      context.commit('SET_TEST_INFO', data)
    },
    setCurrentQuestion (context, data) {
      context.commit('SET_CURRENT_QUESTION', data)
    },
    incrementResult (context) {
      context.commit('INCREMENT_RESULT')
    },
    setName (context, data) {
      context.commit('SET_NAME', data)
    },
    setPassport (context, data) {
      context.commit('SET_PASSPORT', data)
    }
  },
  getters: {
    getTest (state) {
      return state.uploadedObjectTest
    },
    getTestInfo (state) {
      return state.testInformation
    },
    getCurrentQuestion (state) {
      return state.currentQuestion
    },
    getCurrentTestQuestion (state) {
      return state.uploadedObjectTest[state.currentQuestion - 1]
    },
    getResult (state) {
      return state.result
    },
    getName (state) {
      return state.studentName
    },
    getPassportData (state) {
      return state.passportData
    }
  },
  /* modules,
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ], */
  strict: process.env.NODE_ENV !== 'production'
})
