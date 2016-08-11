
import { connect } from 'react-redux'
import { load as loadProfile } from 'actions/profile'
import Home from './Home'

const mapProps = (state) => {
  const { profile: { requesting, fetched, first_name, last_name, email }} = state
  
  return {
    requesting,
    fetched,
    first_name,
    last_name,
    email
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadProfile: () => {
      dispatch(loadProfile())
    }
  }
}

export default connect(mapProps, mapDispatch)(Home)
