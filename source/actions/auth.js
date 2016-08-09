
import { net } from 'helpers'

const login = user => {
  return (dispatch, getState) => {
    const { auth: { requesting, authorized }} = getState()

    if (requesting || authorized)
      return

    const req = { uri: '/api/auth', data: user }

    dispatch({
      api: {
        types: ['auth.request', 'auth.signin', 'auth.error'],
        http: (state) => {
          return net
            .post(req)
            .then(data => data)
            .catch(err => err)
        }
      }
    })
  }
}

const logout = () => {
  return { type: 'auth.signout' }
}

export { login, logout }
