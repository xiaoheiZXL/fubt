import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
// Vue.use(iView);
// import mint from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(mint)

Vue.config.productionTip = false

import '../static/reset.css'
import '../static/common.css'
import '../static/iconfont.css'


Vue.filter('keepTwoNum',function(value){
  value = Number(value);
  return value.toFixed(2);
})
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
