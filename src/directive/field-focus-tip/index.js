import { showTheTip, deleteTheTip } from './showTip.js'
const FieldShowTip = {
  name: 'fieldTip',
  bind: function(el, binding, vnode) {
    showTheTip(el, binding)
  },
  unbind: function(el, binding) {
    deleteTheTip(el, binding)
  }

}

const install = Vue => {
  Vue.directive(FieldShowTip.name, FieldShowTip)
}

if (window.Vue) {
  window[FieldShowTip.name] = FieldShowTip
  window.Vue.use(install)
}

FieldShowTip.install = install
export default FieldShowTip
