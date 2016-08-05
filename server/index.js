
import express from 'express'
import path from 'path'

const app = express()

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(7000,
  () => console.log('Express listening on localhost:7000'))

