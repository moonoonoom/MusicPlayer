// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './theme/theme2/index.css'
import VueCookies from 'vue-cookies'

var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8081'
Vue.prototype.$axios = axios

Vue.use(ElementUI);
Vue.use(VueCookies);
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
