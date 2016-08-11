
import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { loadProfile } = this.props
    loadProfile()
  }

  render() {
    const { requesting, first_name, last_name, email } = this.props
    if (requesting)
      return null

    return (
      <div className="hero is-light">
        <div className="hero-body">
          <div className="container is-fluid">
            <h1 className="title is-2">
              Welcome back {first_name + ' ' + last_name}
            </h1>
            <h2 className="subtitle">
              We are glad to see you again.
            </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
