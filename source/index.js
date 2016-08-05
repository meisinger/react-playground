
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

document.addEventListener('DOMContentLoaded', (evt) => {
  render(
    <App />,
    document.getElementById('view')
  )
})
