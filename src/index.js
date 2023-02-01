//? Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
//? Services
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
//? Components
import { RootCmp } from './root-cmp'
//? Style
import './assets/styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <RootCmp />
  </Router>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()
