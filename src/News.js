import React from 'react'
import "./News.css";

const News = () => {
  return (
    <div className="section">
    <header>
     <div className="top">
     <h1 style={{}}>News</h1>
     </div>
 </header>
   <section className="news">
         <article>
             <img src="./images/news1.jpeg" alt="News 1"/>
             <h3>IIT-Patna scholars developing virtual doctor for early diagnosis of diseases</h3>
             <p  style={{color: "rgb(45, 31, 31",
    opacity:" .7",
    fontsize:" 1.65rem",
    lineheight: "1.5",
    margintop: "1rem",
    fontweight:"400"}}>PATNA: In a novel and path-breaking initiative, IIT Patna is busy</p>
             <a href="https://timesofindia.indiatimes.com/city/patna/iit-patna-scholars-developing-virtual-doctor-for-early-diagnosis-of-diseases/articleshow/94141545.cms" target="blank">Read More</a>
         </article>
         <article>
             <img src="./images/news2.jpeg" alt="News 2"/>
             <h3>IIT पटना बना रहा वर्चुअल डॉक्टर, एप की मदद से होगा इलाज, जानें क्या होगा खास</h3>
             <p style={{color: "rgb(45, 31, 31",
    opacity:" .7",
    fontsize:" 1.65rem",
    lineheight: "1.5",
    margintop: "1rem",
    fontweight:"400"}}>आने वाले दिनों में यह मोबाइल एप इलाज के तरीकों में बड़ा बदलाव लेकर आ सकता है.</p>
             <a href="https://www.prabhatkhabar.com/state/bihar/patna/iit-patna-is-making-virtual-doctor-for-telemedicine-facility-will-be-easy-ans" target="blank">Read More</a>
         </article>
         <article>
         <iframe  src="https://www.youtube.com/embed/BfPw-NfddPI?si=FjcWN6-Q4uzdvIIr&amp;start=574" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <h3>AI for the good | Sriparna Saha | TEDxIITPatna</h3>
             <p style={{color: "rgb(45, 31, 31",
    opacity:" .7",
    fontsize:" 1.65rem",
    lineheight: "1.5",
    margintop: "1rem",
    fontweight:"400"}}>Sriparna Saha, one of the eight leading women scientists in the area of AI in India and an Associate Editor of IEEE, is an</p>
             <a href="https://youtu.be/BfPw-NfddPI?si=tRtsQcRgF1Gxjj50" target="blank">Read More</a>
         </article>
     </section>
 </div>
);
};

export default News
