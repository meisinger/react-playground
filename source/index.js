
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import { generateRoutes } from 'routes'
import configure from 'configure'

const store = configure()
const routes = generateRoutes(store)

document.addEventListener('DOMContentLoaded', (evt) => {  
  render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('view')
  )
})

module.hot.accept()
