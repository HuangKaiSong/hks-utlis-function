import * as hks from './function/index'
import loading from "./components/loading";

const install = Vue => {
    if (parseInt(Vue.version) < 3) {
        Vue.prototype.$hks = hks.default
    } else {
        Vue.config.globalProperties.$hks = hks.default
    }

    Vue.component('hks-loading', loading)
}

export default {
    install
}
