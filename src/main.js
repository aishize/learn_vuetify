import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

// API_key 1UoNSDisFnoKkem4KNlW

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
