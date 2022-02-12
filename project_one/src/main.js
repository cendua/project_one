import Vue from 'vue'
import App from './App.vue'
import './pluginunit/vant'
import 'vant/lib/index.css'
import router from './router'
import store from '@/store/index.js'
// 关闭生产模式提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
