
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import Welcome from 'components/Welcome'
import Signup from 'pages/signup/Signup'
import Signin from 'pages/signin/Signin'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="signup" component={Signup} />
    <Route path="signin" component={Signin} />
  </Route>
)
