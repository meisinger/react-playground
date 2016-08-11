
const initProfile = {
  requesting: false
}

export default (state = initProfile, action) => {
  switch (action.type) {
    case 'profile.request':
      return Object.assign({}, state, {
        requesting: true
      })
    case 'profile.response':
      return Object.assign({}, state, {
        requesting: false,
        first_name: action.data.first_name,
        last_name: action.data.last_name,
        name: action.data.name,
        email: action.data.email,
        fetched: action.fetched
      })
    default:
      return state
  }
}
