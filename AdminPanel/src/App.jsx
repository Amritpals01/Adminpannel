import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header' 
import Sidebar from './Sidebar'
import Home from './Home'

function App() {

  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Home />

    </div>
  )
}

export default App
