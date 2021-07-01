import Vue from 'vue'
import App from './app.vue'
// import hks from './packages/index'
// import hks from './dist/index'
import hks from 'hks-function/lib/index'

Vue.use(hks)
new Vue({
    el: '#app',
    render: h => h(App)
})