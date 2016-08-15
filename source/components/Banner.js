
import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <section className="hero is-primary heading">
        <div className="hero-body">
          <div className="container">
            <h2 className="title has-text-centered">
              {this.props.title}
            </h2>
          </div>
        </div>
      </section>
    )
  }
}
