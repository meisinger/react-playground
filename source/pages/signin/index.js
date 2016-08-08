
import { connect } from 'react-redux'
import { login } from 'actions/auth'
import Signin from './Signin'

const mapProps = (state) => {
  const { auth: { requesting, authorized, errors }} = state

  return {
    requesting,
    authorized,
    errors
  }
}

const mapDispatch = (dispatch) => {
  return {
    signin: (user) => {
      dispatch(login(user))
    }
  }
}

export default connect(mapProps, mapDispatch)(Signin)
