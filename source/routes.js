
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import Welcome from 'components/Welcome'
import HeaderGuest from 'components/HeaderGuest'
import HeaderMember from 'components/HeaderMember'

import { default as Signup } from 'pages/signup'
import { default as Signin } from 'pages/signin'
import { default as Home } from 'pages/home'

const generateRoutes = (store) => {
  const getIndex = (next, callback) => {
    const { auth: { authorized }} = store.getState()

    const components = (authorized)
      ? { main: Home, header: HeaderMember }
      : { main: Welcome, header: HeaderGuest }

    callback(null, components)
  }

  return (
    <Route path="/" component={App}>
      <IndexRoute getComponents={getIndex} />
      <Route path="signup" components={{main: Signup, header: HeaderGuest}} />
      <Route path="signin" components={{main: Signin, header: HeaderGuest}} />
      <Route path="member" components={{main: Home, header: HeaderMember}} />
    </Route>
  )
}

export { generateRoutes }
