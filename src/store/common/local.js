const TokenKey = 'token'
const UserInfoKey = 'userInfo'

export function getLocalToken() {
  return window.localStorage.getItem(TokenKey)
}

export function setLocalToken(token) {
  window.localStorage.setItem(TokenKey, token)
}

export function removeLocalToken() {
  window.localStorage.removeItem(TokenKey)
}

export function setLocalUserInfo(user) {
  window.localStorage.setItem(UserInfoKey, JSON.stringify(user))
}

export function getLocalUserInfo() {
  return JSON.parse(window.localStorage.getItem('userInfo'))
}

export function removeLocalUserInfo() {
  window.localStorage.removeItem(UserInfoKey)
}
