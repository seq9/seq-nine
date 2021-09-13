import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './assets/style'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import Home from './pages/home/home'
import My from './pages/my/my'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/my" exact>
          <My />
        </Route>

      </Switch>

    </Router>

  </React.StrictMode>,
  document.getElementById('root')
)
