
import React, { Component } from 'react'
import Loading from './Loading'
import Welcome from './Welcome'
import Header from './Header'
import Footer from './Footer'
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
      <div className="view-container">
        <Loading />
        <Header>{header}</Header>
        <section className="view-content">
          {main}
        </section>
        <Footer />
      </div>
    )
  }
}
