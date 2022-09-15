import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import PasswordGenerator from './views/password-generator'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={PasswordGenerator} exact path="/password-generator" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
