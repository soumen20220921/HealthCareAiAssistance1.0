import React from 'react'
import "./footer.css"
import {  FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='left'>
        <div className='about'>
        <h3>HealthCareAi</h3>
            <div className='p1'>
                @{new Date().getFullYear()} HealthCareAi.<br/> All Rights Reserved
            </div>
        </div>
        <div className='suscribe'>
        <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
        </div>
      </div>
      {/* right portion */}
      <div className='right'>
        {/* first child */}
      <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
              <a rel="noreferrer"
                  href="https://twitter.com/_Clinical_AI_/"
                  target="_blank">
                  <FaTwitter className="icons" />
                </a>
              </div>
              <div>
              <a rel="noreferrer"
                  href="https://www.instagram.com/"
                  target="_blank">
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a rel="noreferrer"
                  href="https://www.linkedin.com/company/clinical-ai-assistance"
                  target="_blank">
                  <FaLinkedin className="icons"  />
                </a>
              </div>
            </div>
          </div>
         {/* second child */}
         <div className="footer-contact">
            <h3>Contact Us</h3>
            <div className='p1'>Foundation For Innovators In Science And Technology(FIIST), <br/>
Office- 7, 5th Floor, Block 9<br/>
Indian Institute of Technology, Patna<br/>
Bihta, Bihar 801106 India</div>
          </div>
          {/* #rd child */}
          <div className="footer-sponsor">
            <h3>Sponsored By</h3>
            <div className='gap'>
              <div className="microsoft">
                 <img src=".\images\Microsoft.jpeg" alt="" />
              </div>
              <div className="fist">
              <img src=".\images\fist2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
   
  )
}

export default Footer
