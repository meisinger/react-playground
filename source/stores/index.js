
import { combineReducers } from 'redux'
import { default as auth } from './auth'
import { default as profile } from './profile'

export default combineReducers({
  auth,
  profile
})
