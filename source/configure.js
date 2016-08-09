
import { compose, createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'middleware'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import stores from 'stores'

export default (initState) => {
  const store = createStore(
    stores,
    initState,
    applyMiddleware(
      apiMiddleware,
      thunkMiddleware,
      createLogger()
    )
  )

  if (module.hot) {
    module.hot.accept('./stores', () => {
      const next = require('./stores').default
      store.replaceReducer(next)
    })
  }

  return store
}
