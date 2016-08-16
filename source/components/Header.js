
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="section">
        <nav className="nav">
          <div className="nav-left">
            <Link to="/" className="nav-item">
              <strong>Meisinger</strong>
            </Link>
          </div>
          {this.props.children}
        </nav>
      </header>
    )
  }
}
