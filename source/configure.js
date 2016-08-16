
import { compose, createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'middleware'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import stores from 'stores'

const middleware = applyMiddleware(
  apiMiddleware,
  thunkMiddleware,
  createLogger()
)

export default (initState) => {
  const store = createStore(
    stores,
    initState,
    middleware
  )

  if (module.hot) {
    module.hot.accept('./stores', () => {
      const next = require('./stores').default
      store.replaceReducer(next)
    })
  }

  return store
}
