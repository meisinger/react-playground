
import { net } from 'helpers'

const login = user => {
  return (dispatch, getState) => {
    const { auth: { requesting, authorized }} = getState()

    if (requesting || authorized)
      return

    const req = {
      uri: '/api/auth',
      data: user
    }

    dispatch({ type: 'auth.request' })
    net.post(req)
      .then(data => {
        dispatch({
          type: 'auth.signin',
          data: data
        })
      })
      .catch(err => {
        dispatch({
          type: 'auth.error',
          errors: err
        })
      })
  }
}

const logout = () => {
  return { type: 'auth.signout' }
}

export { login, logout }
