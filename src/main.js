import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/index.scss'
import './assets/fonts/font.scss'
import GaButton from './components/Button'
import GaInput from './components/Input'
import GaDialog from './components/Dialog'

Vue.config.productionTip = false

Vue.component(GaButton.name, GaButton)
Vue.component(GaDialog.name, GaDialog)
Vue.component(GaInput.name, GaInput)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
