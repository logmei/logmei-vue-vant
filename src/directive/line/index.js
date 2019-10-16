import line from './line.js'

const install = Vue => {
  Vue.directive(line.name, line)
}

if (window.Vue) {
  window[line.name] = line
  window.Vue.use(install)
}

line.install = install
export default line
