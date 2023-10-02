import React from 'react'
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
// import styled from "styled-components";
import "./Services.css";
const Services = () => {
  return (
    <div className="section">
      <header>
        <h1 style={{ color: "#3F5BB5" }}>Our Services</h1>
      </header>

      <main>
        <div class="service-box">
          <h2><b>Online Doctor Consultant</b></h2>
          <img className="Dr" src=".\images\Online-Doctor-Consultation 2.jpg" alt="" />
          <div className="button">
            <Button className="btn hireme-btn">
              <NavLink to="/onlinedoctor"> DETAILS </NavLink>
            </Button>
            <Button className="btn hireme-btn">
              <NavLink to="/OnlineDoctor"> Access </NavLink>
            </Button>
          </div>
        </div>
        <div class="service-box">
          <h2><b>Dataset</b></h2>
          <img src=".\images\dataset.png" alt="" />
          <div className="button">
            <Button className="btn hireme-btn">
              <NavLink to="/dataset"> Explore </NavLink>
            </Button>
            <Button className="btn hireme-btn">
              <a href="https://forms.gle/yKLF5w9B57CLbNks6" target='blank'>Access</a>
            </Button>
          </div>
        </div>

        <div class="service-box">
          <h2><b>Framework</b></h2>
          <img src="./images/framework.png" alt="" />
          <div className="button">
            <Button className="btn hireme-btn">
              <NavLink to="/contact"> Explore </NavLink>
            </Button>
            <Button className="btn hireme-btn">
              <NavLink to="/contact"> Access </NavLink>
            </Button>
          </div>
        </div>
        <div class="service-box">
          <h2><b>Clinical Task</b></h2>
          <img src=".\images\clinik2.jpg" alt="" />
          <div className="button">
            <Button className="btn hireme-btn">
              <NavLink to="/contact"> Explore </NavLink>
            </Button>
            <Button className="btn hireme-btn">
              <NavLink to="/contact"> REGISTER </NavLink>
            </Button>
          </div>
        </div>
        <div class="service-box">
          <h2><b>Mentorship</b></h2>
          <img src=".\images\mentorship.jpg" alt="" />
          <div className="button">
            <Button className="btn hireme-btn">
              <NavLink to="/contact"> Explore </NavLink>
            </Button>
            <Button className="btn hireme-btn">
              <NavLink to="/contact"> REGISTER </NavLink>
            </Button>

          </div>
        </div>

        {/* <div class="service-box">
          <H2></H2>
            <img src=".\images\clinik.avif" alt="" />
            <Button className="btn hireme-btn">
            <NavLink to="/contact"> Clinikal NLP Task </NavLink>
          </Button>
        </div>

        <div class="service-box">
            <img src=".\images\mentorship.jpg" alt="" />
            <Button className="btn hireme-btn">
            <NavLink to="/contact"> Mentorship </NavLink>
          </Button>
        </div> */}
      </main>


    </div>
  )
}

export default Services
