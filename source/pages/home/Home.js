
import React, { Component } from 'react'

export default class extends Component {
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

    const contentStyle = {
      alignSelf: 'center',
      width: '100%',
      maxWidth: 1200,
      marginTop: 20
    }

    const navStyle = {
      minWidth: 250
    }

    return (
      <div className="flex-column full">
        <div className="billboard is-light">
          <div className="content">
            <div className="title is-2">
              Welcome back {first_name + ' ' + last_name}
            </div>
            <div className="subtitle">
              We are glad to see you again.
            </div>
          </div>
        </div>
        <div className="flex-row center" style={contentStyle}>
          <div className="flex-column center full is-light">
            <div>Main?</div>
          </div>
          <div className="flex-column center is-primary" style={navStyle}>
            <div>Nav?</div>
          </div>
        </div>
      </div>
    )
  }
}
