import React, { useState } from 'react'
import Header from './components/header'
import Home from './pages/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App
