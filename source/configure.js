
import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import stores from 'stores'

export default (initState) => {
  const store = createStore(
    stores,
    initState,
    applyMiddleware(
      thunkMiddleware,
      createLogger()
    )
  )

  return store
}
