
import React, { Component } from 'react'
import Banner from 'components/Banner'
import SigninForm from './SigninForm'

class Signin extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { signin } = this.props

    return (
      <div className="flex-column center">
        <div className="box">
          <Banner title="Sign In" />
          <SigninForm signin={signin} />
        </div>
      </div>
    )
  }
}

export default Signin

