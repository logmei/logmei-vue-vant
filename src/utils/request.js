import axios from 'axios'
import store from '../store'
import router from '../router'
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true
})

service.interceptors.request.use(
  config => {
    console.log('baseUrl', process.env)
    if (store.getters.token)config.headers['token'] = store.getters.token
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 0) {
      // 9008：登录过期 9009：被挤掉线
      if (res.code === 9008 || res.code === 9009) {
        // to re-login
        Toast('登录超时')
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      } else if (res.code === 9010) { // 增加权限的提示
        Toast(res.msg)
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      } else if (res.code === 403) {
        // to re-login
        router.push({
          path: '/401'
        })
      } else if (res.code === 404) {
        // to re-login
        router.push({
          path: '/404'
        })
      } else {
        Toast({ message: res.msg || 'error', className: 'toast-error-class' })
      }
      return Promise.reject(res.msg || 'error')
    } else {
      return res
    }
  },
  error => {
    Toast(error.message || 'error')
    return Promise.reject(error)
  }
)

export default service

