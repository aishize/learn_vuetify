import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import test from './modules/test'
import weather from './modules/weather'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    weather,
    test,
    users,
    auth
  }
})
