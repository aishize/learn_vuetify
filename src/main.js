import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Carousel3d from 'vue-carousel-3d'
import VueKonva from 'vue-konva'

Vue.config.productionTip = false

// API_key 1UoNSDisFnoKkem4KNlW
Vue.use(Carousel3d)
Vue.use(VueKonva)

const firebaseConfig = {
  apiKey: "AIzaSyCsk9_uqsK1pa8JpdqHHGTj6QkzwXZV3Wk",
  authDomain: "todos-base.firebaseapp.com",
  databaseURL: "https://todos-base.firebaseio.com",
  projectId: "todos-base",
  storageBucket: "todos-base.appspot.com",
  messagingSenderId: "981257430340",
  appId: "1:981257430340:web:2aaac343184e44b466a311"
}

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
