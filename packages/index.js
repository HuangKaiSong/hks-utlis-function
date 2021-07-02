import * as hks from './function/index'

const install = Vue => {
    if (parseInt(Vue.version) < 3) {
        Vue.prototype.$hks = hks.default
    } else {
        Vue.config.globalProperties.$hks = hks.default
    }
}

export default {
    install
}
