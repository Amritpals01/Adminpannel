import React from 'react'
import { BsCart3 } from 'react-icons/bs'

function Sidebar() {
  return (
    <aside id='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3  className='icon_header'/> ADMIN
        </div>
        <span className='icon close-icon'>X</span>
      </div>
      <ul className='sidebarlist'>
        <li className='sidebar-list-item'>
          <a href="">
            <BsCart3 className='icon'/> Dashboard
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
