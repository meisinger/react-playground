
import express from 'express'

const router = express.Router()
router.get('/', (req, res) => {
  setTimeout(() => {
    res.status(200).send({
      id: 1,
      first_name: 'John',
      last_name: 'Dough',
      name: 'John Dough',
      email: 'jdough@mock.none.net'
    })
  }, 725)
})

export default router
