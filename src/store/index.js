import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const moduleFiles = require.context('./modules', false, /.js$/)

const modules = moduleFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const content = moduleFiles(modulePath)
  modules[moduleName] = content.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters
})

export default store
