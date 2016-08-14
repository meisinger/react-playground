
import moment from 'moment'
import { net } from 'helpers'

const load = () => {
  return (dispatch, getState) => {
    const { profile: { requesting, fetched }} = getState()

    const stale = moment().subtract(30, 'seconds')
    if (requesting || (fetched && moment(fetched) > stale))
      return

    const types = ['profile.request', 'profile.response', 'api.error']
    const action = {
      api: {
        types: types,
        http: (state) => {
          return net.get({ uri: '/api/profile' })
            .then(data => Object.assign({}, data, { fetched: new Date() }))
            .catch(err => err)
        }
      }
    }

    dispatch(action)
  }
}

export { load }
