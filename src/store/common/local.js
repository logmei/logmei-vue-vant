const TokenKey = 'token'
const UserInfoKey = 'userInfo'
const SearchHistoryKey = 'searchName'
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
  return JSON.parse(window.localStorage.getItem(UserInfoKey))
}

export function removeLocalUserInfo() {
  window.localStorage.removeItem(UserInfoKey)
}

export function setLocalSearchHistory(name) {
  if (!name.trim()) return
  const list = getLocalSearchHistory()
  if (list.indexOf(name) !== -1) {
    return
  }
  list.unshift(name)
  if (list.length > 10) {
    list.pop()
  }
  window.localStorage.setItem(SearchHistoryKey, JSON.stringify(list))
}

export function getLocalSearchHistory() {
  return window.localStorage.getItem(SearchHistoryKey) ? JSON.parse(window.localStorage.getItem(SearchHistoryKey)) : []
}

export function removeLocalSearchHistory() {
  window.localStorage.removeItem(SearchHistoryKey)
}
