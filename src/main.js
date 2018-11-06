// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/globle.css'
 import { Toast } from 'mint-ui';
Vue.component(Toast.name, Toast);
import 'mint-ui/lib/style.css'
// require styles
import md5 from './assets/js/md5'
Vue.use(md5)
import 'babel-polyfill'
Vue.config.productionTip = false
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		appkey: 'B4128E82117667A98228D2C764BD49D7',
		appsecret: '177A40A45E4288A0',
		signa: '',
		sjzz: "^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$"
	},
	mutations: {
		changeLogin(state, data) {
			state.count = data;
		},
		setSigna(state, data) {
			state.signa = data
		}
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
