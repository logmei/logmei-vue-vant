import request from '@/utils/request.js'

export {
  login as loginInterface
}
function login(params) {
  return request({
    url: '/login',
    method: 'post',
    data: params
  })
}
