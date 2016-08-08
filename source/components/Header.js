
import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { logout } from 'actions/auth'

class Header extends Component {
  constructor(props) {
    super(props)

    this.handleLogout = this.onLogout.bind(this)
  }

  onLogout(evt) {
    const { signout } = this.props
    evt.preventDefault()

    signout()
  }

  render() {
    const { authorized } = this.props

    const links = (authorized)
      ? this.renderUserLinks()
      : this.renderGuestLinks()

    return (
      <header className="section">
        <nav className="nav">
          <div className="nav-left">
            <Link to="/" className="nav-item">
              <strong>Meisinger</strong>
            </Link>
          </div>
          { links }
        </nav>
      </header>
    )
  }

  renderGuestLinks() {
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

  renderUserLinks() {
    return (
      <div className="nav-right">
        <span className="nav-item">
          <a className="button" onClick={this.handleLogout}>
            <span className="icon">
              <i className="fa fa-sign-out"></i>
            </span>
            <span>Sign Out</span>
          </a>
        </span>
      </div>
    )
  }
}

const mapProps = (state) => {
  const { auth: { authorized }} = state

  return {
    authorized
  }
}

const mapDispatch = (dispatch) => {
  return {
    signout: () => {
      dispatch(logout())
    }
  }
}

export default connect(mapProps, mapDispatch)(Header)
