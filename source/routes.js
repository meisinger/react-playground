
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import Welcome from 'components/Welcome'
import { default as Signup } from 'pages/signup'
import { default as Signin } from 'pages/signin'
import { default as Home } from 'pages/home'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="signup" component={Signup} />
    <Route path="signin" component={Signin} />
    <Route path="member" component={Home} />
  </Route>
)
