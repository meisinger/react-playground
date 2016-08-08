
import React, { Component } from 'react'

class SigninForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.onChange.bind(this)
    this.handleSubmit = this.onSubmit.bind(this)
  }

  onChange(evt) {
    const { target } = evt
    evt.preventDefault()

    this.setState({ [target.name]: target.value })
  }

  onSubmit(evt) {
    const { signin } = this.props
    evt.preventDefault()

    signin(this.state)
  }

  render() {
    const containerStyle = {margin: '20px 0'}
    const buttonGroupStyle = {marginTop: '20px'}

    return (
      <div className="container" style={containerStyle}>
        <label className="label">Username</label>
        <p className="control">
          <input type="email" name="username" className="input"
            value={this.state.username} onChange={this.handleChange}/>
          <span className="help"></span>
        </p>
        <label className="label">Password</label>
        <p className="control">
          <input type="password" name="password" className="input"
            value={this.state.password} onChange={this.handleChange}/>
          <span className="help"></span>
        </p>
        <p className="control is-grouped is-grouped-centered"
          style={buttonGroupStyle}>
          <button className="button is-primary is-medium"
            onClick={this.handleSubmit}>
            Sign-In
          </button>
        </p>
      </div>
    )
  }
}

export default SigninForm
