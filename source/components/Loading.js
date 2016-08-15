
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Portal from './Portal'

const styles = {
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  flex_center: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    zIndex: 9000,
    backgroundColor: 'rgba(120, 120, 120, .6)',
    cursor: 'wait'
  },
  loading: {
    minWidth: 200,
    maxWidth: 200,
    minHeight: 120,
    maxHeight: 120,
    color: '#efefef'
  }
}

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

    const wrapperStyle = Object.assign({},
      styles.flex_center,
      styles.absolute,
      styles.wrapper
    )

    const loadingStyle = Object.assign({},
      styles.flex_center,
      styles.loading
    )

    return (
      <Portal style={wrapperStyle}>
        <div style={loadingStyle}>
          <i className="fa fa-spinner fa-spin fa-5x fa-fw"></i>
        </div>
      </Portal>
    )
  }
}

const mapProps = (state) => {
  const { http: { activeCount }} = state
  return {
    activeCount
  }
}

export default connect(mapProps)(Loading)
