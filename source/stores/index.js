
import { combineReducers } from 'redux'
import { default as auth } from './auth'
import { default as profile } from './profile'

const initHttp = {
  activeCount: 0
}

const http = (state = initHttp, action) => {
  switch (action.type) {
    case 'http.request':
      return Object.assign({}, state, {
        activeCount: (state.activeCount || 0) + 1
      })
    case 'http.success':
    case 'http.failure':
      return Object.assign({}, state, {
        activeCount: (state.activeCount || 1) - 1
      })
    default:
      return state
  }
}

export default combineReducers({
  http,
  auth,
  profile
})
