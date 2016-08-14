
import React, { Component } from 'react'
import Header from './Header'
import Loading from './Loading'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { authorized, signout } = this.props

    return (
      <div className="container">
        <Loading />
        <Header authorized={authorized} signout={signout} />
        {this.props.children}
      </div>
    )
  }
}

export default App
