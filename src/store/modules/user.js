
import { getToken, setToken } from '../common/local.js'
import { loginInterface } from '@/api/user.js'
const state = {
  token: getToken()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      console.log('login', userInfo)
      loginInterface(userInfo).then(response => {
        const { token } = response.result
        commit('SET_TOKEN', token)
        setToken(token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
