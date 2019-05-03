import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
