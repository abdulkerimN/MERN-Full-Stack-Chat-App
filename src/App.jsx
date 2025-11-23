import React from 'react'
import { Routes } from 'react-router-dom'
import HomePage from './pages/Homepage.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element="{<Homepage />}" />
      </Routes>
    </div>
  )
}

export default App
