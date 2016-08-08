
import { combineReducers } from 'redux'
import { default as auth } from './auth'

export default combineReducers({
  auth: auth
})
