import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')