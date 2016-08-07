
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

export default (initState) => {
  const store = createStore(
    (state = {}) => state,
    initState,
    applyMiddleware(
      thunkMiddleware,
      createLogger()
    )
  )

  return store
}
