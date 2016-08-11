
import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'

import config from '../webpack.config.dev'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import auth from './api/auth'
import profile from './api/profile'

const app = express()
const compiler = webpack(config)

app.use(webpackHotMiddleware(compiler))
app.use(webpackMiddleware(compiler, {
  hot: true,
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// routes
app.use('/api/auth', auth)
app.use('/api/profile', profile)

// fallback [catchall] route
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(7000,
  () => console.log('Express listening on localhost:7000'))

