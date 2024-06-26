import React from 'react'
import { Link } from 'react-router-dom'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSideBarToggle, openSidebar}) {
  return (
    <aside id='sidebar' className={openSideBarToggle ? "sidebar-responsive": " "}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3  className='icon_header'/>ADMIN
        </div>
        <span className='icon close-icon' onClick={openSidebar}>X</span>
      </div>
      <ul className='sidebar-list'>

        <li className='sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='icon'/> Dashboard:
          </a>
        </li>

        <li className='sidebar-list-item'>
          <Link to="/Products">
            <BsFillArchiveFill className='icon'/>
            Products</Link>
        </li>

        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGrid3X3GapFill className='icon'/> Categories:
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a href="">
            <BsPeopleFill className='icon'/> Customer:
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a href="">
            <BsListCheck className='icon'/> Inventory:
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a href="">
            <BsMenuButtonWideFill className='icon'/> Reports:
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGearFill className='icon'/> Settings:
          </a>
        </li>

      </ul>
    </aside>
  )
}

export default Sidebar
