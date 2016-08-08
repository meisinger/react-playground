
import express from 'express'

const router = express.Router()
router.post('/', (req, res) => {
  const { body: { username, password }} = req

  res.status(200).send({
    success: true,
    token: 'abc123def456'
  })
})

export default router
