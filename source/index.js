
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import routes from 'routes'
import configure from 'configure'

const store = configure()

document.addEventListener('DOMContentLoaded', (evt) => {  
  render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('view')
  )
})
