
import { net } from 'helpers'
import { browserHistory } from 'react-router'

const login = user => {
  return (dispatch, getState) => {
    const { auth: { requesting, authorized }} = getState()

    if (requesting || authorized)
      return

    const types = ['auth.request', 'auth.signin', 'auth.error']
    const action = {
      api: {
        types: types,
        http: (state) => {
          return net.post({ uri: '/api/auth', data: user })
            .then(data => data)
            .catch(err => err)
        }
      }
    }

    dispatch(action)
      .then(() => {
        browserHistory.push('/member')
      })
  }
}

const logout = () => {
  return (dispatch) => {
    dispatch({ type: 'auth.signout' })
    browserHistory.push('/')
  }
}

export { login, logout }
