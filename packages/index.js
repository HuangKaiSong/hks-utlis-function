import {uniq} from './function/arrUtils'
const install = Vue => {

  Vue.prototype.$hks = {
    uniq
  }
}

export default install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
  if (install.installed) {
    install.installed = false;
  }
}
