
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <nav className="left">
          <Link to="/" className="brand">
            <strong>Meisinger</strong>
          </Link>
        </nav>
        {this.props.children}
      </header>
    )
  }
}
