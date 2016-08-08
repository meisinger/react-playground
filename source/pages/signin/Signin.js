
import React, { Component } from 'react'
import Banner from 'components/Banner'
import SigninForm from './SigninForm'

class Signin extends Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(next) {
    if (next.authorized)
      this.context.router.push('/signup')
  }

  render() {
    const { signin } = this.props

    return (
      <div className="columns is-centered">
        <div className="column is-4">
          <div className="box">
            <Banner title="Sign In" />
            <SigninForm signin={signin} />
          </div>
        </div>
      </div>
    )
  }
}

Signin.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Signin

