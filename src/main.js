import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/index.scss'
import './assets/fonts/font.scss'
import GaButton from './components/button.vue'
import GaDialog from './components/dialog'

Vue.config.productionTip = false

Vue.component(GaButton.name, GaButton)
Vue.component(GaDialog.name, GaDialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
