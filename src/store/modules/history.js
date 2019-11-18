import { getLocalSearchHistory, setLocalSearchHistory, removeLocalSearchHistory } from '../common/local.js'
const state = {
  historyList: getLocalSearchHistory()
}

const mutations = {
  SET_HISTORYlIST: (state, name) => {
    setLocalSearchHistory(name)
    state.historyList = getLocalSearchHistory()
  },
  REMOVE_HISTORYlIST: (state, name) => {
    removeLocalSearchHistory()
    state.historyList = []
  }
}

export default {
  namespace: true,
  state,
  mutations
}
