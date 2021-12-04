import React, { FC } from "react"
import Routers from "@/routes/index"
import { ConfigProvider } from "antd"

const App: FC = () => {
  return (
    <ConfigProvider>
      <Routers />
    </ConfigProvider>
  )
}

export default App
