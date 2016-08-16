
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from 'actions/auth'

class Header extends Component {
  constructor(props) {
    super(props)

    this.handleLogout = this.onLogout.bind(this)
  }

  onLogout(evt) {
    evt.preventDefault()
    this.props.signout()
  }

  render() {
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

const mapDispatch = (dispatch) => {
  return {
    signout: () => {
      dispatch(logout())
    }
  }
}

export default connect(null, mapDispatch)(Header)
