const functionObj = require.context('./function', false, /.js$/)

const model = {}

const install = Vue => {
  functionObj.keys().forEach(key => {
    Object.assign(model, functionObj(key))
  })

  Vue.prototype.$hks = model
}

export default {
  install
}
