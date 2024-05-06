import { useState } from 'react'
import { Provider } from 'react-redux'

import './App.css'
import Header from './Header' 
import Sidebar from './Sidebar'
import Home from './Home'

function App() {

  const [openSideBarToggle , setOpenSideBarToggle]= useState(false);

  const openSidebar= ()=>{
    setOpenSideBarToggle(!openSideBarToggle)
  }
  return (
    <div className="grid-container">
      <Header openSidebar={openSidebar}/>
      <Sidebar openSideBarToggle={openSideBarToggle} openSidebar={openSidebar}/>
      <Home />

    </div>
  )
}

export default App
