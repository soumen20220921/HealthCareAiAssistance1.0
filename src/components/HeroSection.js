import React from 'react';

import { NavLink } from "react-router-dom";

import "./HeroSection.css"

const HeroSection = () => {
  return (
    <>
      <div className='outer'>
        <div className='text'>

          <p className='heading' style={{ color: 'black' }}>HEALTH<span style={{ color: "#EE7F1A" }}>CARE</span> AI ASSISTANCE</p>
          <p className="hero-para" style={{ color: 'black' }}>
            The diagnosis assistant works as an assistant to real doctors, which conducts a detailed symptom investigation and extracts relevant symptoms through conversing with a patient depending on chief patient complaints and ongoing dialogue context.
          </p>
          <button className='btn'>
            <NavLink to="/services" className="a">More</NavLink>
          </button>
        </div>
        <div className='img'>
          <img className='img2' src=".\images\hero2-removebg-preview.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default HeroSection
