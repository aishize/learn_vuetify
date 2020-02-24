import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import test from './modules/test'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    test,
    users
  }
})
