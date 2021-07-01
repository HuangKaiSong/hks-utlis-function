import * as context from './function/*.js'

let model = {}
const install = Vue => {
  Object.keys(context.default).forEach(item => {
    Object.assign(model, context.default[item])
  })

  Vue.prototype.$hks = model
}

export default install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
  if (install.installed) {
    install.installed = false;
  }
}
