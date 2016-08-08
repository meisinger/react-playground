
const initAuth = {
  requesting: false,
  authorized: false
}

export default (state = initAuth, action) => {
  switch (action.type) {
    case 'auth.request':
      return Object.assign({}, initAuth, {
        requesting: true
      })
    case 'auth.signout':
      return Object.assign({}, initAuth)
    case 'auth.signin':
      return Object.assign({}, initAuth, {
        authorized: action.data.success,
        token: action.data.token
      })
    case 'auth.error':
      return Object.assign({}, initAuth, {
        errors: action.data.errors
      })
    default:
      return state
  }
}
