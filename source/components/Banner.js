
import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <section className="banner is-primary">
        <div className="title text-centered">
          {this.props.title}
        </div>
      </section>
    )
  }
}
