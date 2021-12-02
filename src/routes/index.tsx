import React from "react"
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
  RouteProps,
} from "react-router-dom"
import Home from "../views/home/home"
import My from "../views/my/my"

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
        <item.component key={index} />
      ))}
    </>
  )
}

export default Routes
