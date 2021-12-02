import React from "react"
import styled from "styled-components"

function Header() {
  return (
    <Wrap>
      <div className="header-bar">
        <div>文档</div>
        <div>个人中心</div>
      </div>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 30px;
  background-color: gray;
  .header-bar {
    cursor: pointer;
    color: white;
    padding: 5px 50px;
    display: flex;
    justify-content: space-between;
  }
`

export default Header
