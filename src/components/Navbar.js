import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    
  return (
    <div style={{  borderbottom: "2px solid black"
    }}>
    
        <ul className="navbar-list" >
        <li >
            <NavLink
              className="navbar-link"
              
              to="/">
             Home
            </NavLink>
          </li>
        <li >
            <NavLink
              className="navbar-link"
              
              to="/WtWy">
              Vision
            </NavLink>
          </li>
          <li >
            <NavLink
              className="navbar-link"
              
              to="/HeAssistant">
              SwaasthyaSathi
            </NavLink>
          </li>
         
          
          
          <li >
            <NavLink
              className="navbar-link"
              
              to="/services">
              Services
            </NavLink>
          </li>
          <li >
            <NavLink
              className="navbar-link"
              
              to="/news">
              News
            </NavLink>
          </li>
          <li >
            <NavLink
              className="navbar-link"
              
              to="/post">
              Team
            </NavLink>
          </li>
          <li >
            <NavLink
              className="navbar-link"
              
              to="/getStarted">
              Get-Started
            </NavLink>
          </li>
        </ul>
        
      </div>
      
   
  )
}

export default Navbar
