
const apiMiddleware = (state) => (next) => (action) => {
  if (!action.api || action.api === null)
    return next(action)

  const { api: { http, types }} = action
  if (typeof http !== 'function')
    throw new Error({message: 'Api Http must be a function.'})

  const resolve = (type, data) => {
    let nextAction = Object.assign({}, action,
      { type }, { data })

    delete nextAction.api
    return nextAction
  }

  const [request, success, failure] = types
  next(resolve(request))

  http(state)
    .then((data) => next(resolve(success, data)))
    .catch((err) => next(resolve(failure, err)))
}

export default apiMiddleware
