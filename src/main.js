import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import GaButton from './components/button.vue'

Vue.config.productionTip = false

Vue.component(GaButton.name, GaButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
