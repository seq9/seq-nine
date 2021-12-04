import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import GlobalStyle from "./assets/style"
import App from "./App"
import { Spin } from "antd"

import "antd/dist/antd.variable.min.css"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Suspense fallback={<Spin />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
)
