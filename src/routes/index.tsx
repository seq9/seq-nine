import React, { lazy } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

const Routes = () => {
  let routes = [
    {
      path: "/home",
      name: "首页",
      component: lazy(() => import("@/views/home/home")),
    },
    {
      path: "/my",
      name: "个人中心",
      component: lazy(() => import("@/views/my/my")),
    },
  ]
  return (
    <Router>
      <Switch>
        {routes.map((item, index) => (
          <Route exact path={item.path} key={index}>
            <item.component />
          </Route>
        ))}
        <Redirect from="/*" to="/home" />
      </Switch>
    </Router>
  )
}

export default Routes
