import Vue from 'vue'
import Vuex from 'vuex'

import groupCollum from './store-groupCollum.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    groupCollum
  }
})