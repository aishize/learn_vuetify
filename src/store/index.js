import Vue from 'vue'
import Vuex from 'vuex'
import project from './modules/project'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    project,
    users
  }
})
