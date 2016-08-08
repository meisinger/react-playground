
import superagent from 'superagent'

const execute = (agent) => {
  return new Promise((resolve, reject) => {
    agent.end((err, res) => {
      if (err || !res.ok) {
        reject({error: err})
      } else {
        resolve(res.body)
      }
    })
  })
}

export default {
  get: (req) => {
    let agent = superagent
      .get(req.uri)
      .query(req.params)
      .accept('json')
      
    return execute(agent)
  },
  del: (req) => {
    let agent = superagent
      .del(req.uri)
      .query(req.params)
      .accept('json')

    return execute(agent)
  },
  put: (req) => {
    let agent = superagent
      .put(req.uri)
      .query(req.params)
      .type(req.type || 'json')
      .send(req.data)
      .accept('json')

    return execute(agent)
  },
  post: (req) => {
    let agent = superagent
      .post(req.uri)
      .query(req.params)
      .type(req.type || 'json')
      .send(req.data)
      .accept('json')

    return execute(agent)
  }
}
