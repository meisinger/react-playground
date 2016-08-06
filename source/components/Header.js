
import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <nav className="nav">
          <div className="nav-left">
            <Link to="/" className="nav-item">
              <strong>Meisinger</strong>
            </Link>
          </div>
          <div className="nav-right">
            <span className="nav-item">
              <Link to="/signup" className="button">
                <span className="icon">
                  <i className="fa fa-user"></i>
                </span>
                <span>Sign Up</span>
              </Link>
            </span>
            <span className="nav-item">
              <a className="button is-primary">
                <span className="icon">
                  <i className="fa fa-sign-in"></i>
                </span>
                <span>Sign-In</span>
              </a>
            </span>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
