import React from "react"
import styled from "styled-components"
import { Button } from "antd"

function Home() {
  return (
    <div>
      <Button type="primary">home</Button>
    </div>
  )
}

const Wrap = styled.div`
  padding: 10px;
  cursor: pointer;
`

export default Home
