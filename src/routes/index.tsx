import React from "react"
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
  RouteProps,
} from "react-router-dom"
import Home from "../pages/home/home"
import My from "../pages/my/my"

const Routes = () => {
  let routes = [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/my",
      component: My,
    },
  ]
  return (
    <>
      {routes.map((item, index) => (
        <item.component />
      ))}
    </>
  )
}

export default Routes
