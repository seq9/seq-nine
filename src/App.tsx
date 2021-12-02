import React, { FC, useState } from "react"
import Header from "./components/header"
import Home from "./views/home/home"
import { Button } from "antd"

const App: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      xx
      <Button type="primary">Button</Button>
    </div>
  )
}

export default App
