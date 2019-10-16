import { constantRoutes } from '@/router'

const state = {
  routes: [],
  addRouters: []
}

const mutations = {
  SET_ROUTERS: (state, routes) => {
    state.addRouters = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  // generateRoutes({ commit }) {
  //   return new Promise((resolve,reject) => {

  //   })
  // }
}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
