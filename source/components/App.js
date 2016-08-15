
import React, { Component } from 'react'
import Header from './Header'
import Loading from './Loading'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <Loading />
        <Header />
        {this.props.children}
      </div>
    )
  }
}
