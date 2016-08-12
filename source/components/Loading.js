
import React, { Component } from 'react'
import Portal from './Portal'

class Loading extends Component {
  constructor(props) {
    super(props)

    this.handle = undefined
    this.state = {
      loading: false
    }
  }

  setLoading() {
    this.handle = setTimeout(function () {
      clearTimeout(this.handle)
      this.handle = undefined

      this.setState({ loading: true })
    }.bind(this), 500)
  }

  clearLoading() {
    if (this.handle) {
      clearTimeout(this.handle)
      this.handle = undefined
    }

    this.setState({ loading: false })
  }

  componentWillReceiveProps(next) {
    if (next.activeCount && !this.props.activeCount)
      this.setLoading()

    if (!next.activeCount && this.props.activeCount)
      this.clearLoading()
  }

  render() {
    const { loading } = this.state
    if (!loading)
      return null

    const flexCenter = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }

    const wrapperStyle = Object.assign({}, flexCenter, {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9000,
      backgroundColor: 'rgba(120, 120, 120, .6)',
      cursor: 'wait'
    })

    const loadingStyle = Object.assign({}, flexCenter, {
      minWidth: 200,
      maxWidth: 200,
      minHeight: 120,
      maxHeight: 120,
      color: '#efefef'
    })

    return (
      <Portal style={wrapperStyle}>
        <div style={loadingStyle}>
          <i className="fa fa-spinner fa-spin fa-5x fa-fw"></i>
        </div>
      </Portal>
    )
  }
}

export default Loading
