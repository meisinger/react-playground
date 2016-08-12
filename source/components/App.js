
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from 'actions/auth'
import Header from './Header'
import Loading from './Loading'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(next) {
    if (this.props.authorized && !next.authorized)
      this.context.router.push('/')
  }

  render() {
    const { authorized, activeCount, signout } = this.props

    return (
      <div className="container">
        <Loading activeCount={activeCount} />
        <Header authorized={authorized} signout={signout} />
        {this.props.children}
      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const mapProps = (state) => {
  const { auth: { authorized }, http: { activeCount }} = state

  return {
    authorized,
    activeCount
  }
}

const mapDispatch = (dispatch) => {
  return {
    signout: () => {
      dispatch(logout())
    }
  }
}

export default connect(mapProps, mapDispatch)(App)
