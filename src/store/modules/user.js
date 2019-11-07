
import { loginInterface } from '@/api/user.js'
import { getLocalToken, setLocalToken, setLocalUserInfo, getLocalUserInfo, removeLocalUserInfo, removeLocalToken } from '../common/local.js'
const state = {
  token: getLocalToken(),
  identity: '',
  name: '',
  departmentName: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_IDENTITY: (state, identity) => {
    state.identity = identity
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_DEPARTMENTNAME: (state, departmentName) => {
    state.departmentName = departmentName
  }
}

const actions = {
  // 登录
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      console.log('login', userInfo)
      loginInterface(userInfo).then(response => {
        const { token } = response.result
        const { name, departmentName, identity } = response.result.user
        setLocalUserInfo({ name, departmentName, identity })
        commit('SET_TOKEN', token)
        commit('SET_NAME', name)
        commit('SET_DEPARTMENTNAME', departmentName)
        commit('SET_IDENTITY', identity)
        setLocalToken(token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 设置身份
  setIdentity({ commit }, identity) {
    return new Promise((resolve, reject) => {
      const user = getLocalUserInfo()
      user.identity = identity
      setLocalUserInfo(user)
      resolve()
    })
  },
  // 获取本地信息
  getLocalInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      const { name, departmentName, identity } = getLocalUserInfo()
      commit('SET_NAME', name)
      commit('SET_DEPARTMENTNAME', departmentName)
      commit('SET_IDENTITY', identity)
      resolve()
    })
  },
  // 退出登录
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('SET_NAME', '')
      commit('SET_DEPARTMENTNAME', '')
      commit('SET_IDENTITY', '')
      removeLocalToken()
      removeLocalUserInfo()
      resolve()
    })
  }

}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
