import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/index.scss'
import './assets/fonts/font.scss'
import GaButton from './components/Button'
import GaInput from './components/Input'
import GaDialog from './components/Dialog'
import GaSwitch from './components/Switch'
import GaRadio from './components/Radio'
import GaRadioGroup from './components/RadioGroup'
import GaCheckBox from './components/CheckBox'
import GaCheckBoxGroup from './components/GaCheckBoxGroup'
import GaForm from './components/Form'
import GaFormItem from './components/FormItem'

Vue.config.productionTip = false

Vue.component(GaButton.name, GaButton)
Vue.component(GaDialog.name, GaDialog)
Vue.component(GaInput.name, GaInput)
Vue.component(GaSwitch.name, GaSwitch)
Vue.component(GaRadio.name, GaRadio)
Vue.component(GaRadioGroup.name, GaRadioGroup)
Vue.component(GaCheckBox.name, GaCheckBox)
Vue.component(GaCheckBoxGroup.name, GaCheckBoxGroup)
Vue.component(GaForm.name, GaForm)
Vue.component(GaFormItem.name, GaFormItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
