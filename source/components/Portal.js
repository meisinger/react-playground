
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Portal extends Component {
  constructor(props) {
    super(props)
    this.element = undefined
  }

  componentDidMount() {
    const { id } = this.props

    let portal = id && document.getElementById(id)
    if (!portal || portal === null) {
      portal = document.createElement('div')
      document.body.appendChild(portal)
    }

    this.element = portal
    this.componentDidUpdate()
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.element)
    document.body.removeChild(this.element)
  }

  componentDidUpdate() {
    let { component, style } = this.props
    if (!component || component === null) {
      component = (
        <div style={style}>
          {this.props.children}
        </div>
      )
    }

    ReactDOM.render(component, this.element)
  }

  render() {
    return null
  }
}

export default Portal
