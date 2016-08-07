
import React, { Component } from 'react'
import Banner from 'components/Banner'
import SigninForm from './SigninForm'

class Signin extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-4">
          <div className="box">
            <Banner title="Sign In" />
            <SigninForm />
          </div>
        </div>
      </div>
    )
  }
}

export default Signin

