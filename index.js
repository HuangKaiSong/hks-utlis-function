// import debounce from '@/utils/libs/debounce'
// import throttle from '@/utils/libs/throttle'
// import { timeFrom, timeFormat } from '@/utils/libs/tiimeFrom'
//
// const $hks = {
//   debounce,
//   throttle,
//   timeFrom,
//   timeFormat
// }

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
