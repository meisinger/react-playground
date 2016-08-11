
import moment from 'moment'
import { net } from 'helpers'

const load = () => {
  return (dispatch, getState) => {
    const { profile: { requesting, fetched }} = getState()

    if (requesting)
      return

    if (fetched && moment(fetched) > moment().subtract(30, 'seconds'))
      return;

    const req = { uri: '/api/profile' }

    dispatch({
      api: {
        types: ['profile.request', 'profile.response', 'api.error'],
        http: (state) => {
          return net
            .get(req)
            .then(data =>
              Object.assign({}, data,
                { fetched: moment() })
            )
            .catch(err => err)
        }
      }
    })
  }
}

export { load }
