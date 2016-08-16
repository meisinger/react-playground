
import React, { Component } from 'react'
import Loading from './Loading'
import Welcome from './Welcome'
import Header from './Header'
import HeaderGuest from './HeaderGuest'

export default class extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let main = (<Welcome />)
    if (this.props.main)
      main = this.props.main
    
    let header = (<HeaderGuest />)
    if (this.props.header)
      header = this.props.header

    return (
      <div className="container">
        <Loading />
        <Header>{header}</Header>
        {main}
      </div>
    )
  }
}
