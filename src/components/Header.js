import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import "./Header.css"
const Header = () => {
  return (
    <div className='main-header'>
      <NavLink to="/">
        <img src=".\images\health-logo.png" alt="logo" className="logo" />
      </NavLink>
      <Navbar/>
    </div>
  )
}

export default Header
