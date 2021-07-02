import Vue from 'vue'
import App from './App.vue'
// import hks from '../lib/hks-function.umd.min'
// import hks from 'hks-function'
import hks from '../packages/index'

Vue.config.productionTip = false
Vue.use(hks)

new Vue({
  render: h => h(App),
}).$mount('#app')
