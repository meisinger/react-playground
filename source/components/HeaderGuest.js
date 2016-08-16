
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
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
          <Link to="/signin" className="button is-primary">
            <span className="icon">
              <i className="fa fa-sign-in"></i>
            </span>
            <span>Sign-In</span>
          </Link>
        </span>
      </div>
    )
  }
}
