import React from 'react';
import "./OnlineDoctor.css";
// Not Completed
const data = [
  {
    name: "Dr. Minakshi, MBBS, MD",
    department: "Medicine",
    hospital: "Sat 4pm to 6pm",
    img:"./images/Minakshi-Dhar.jpg"
  },

  {
    name: "Dr Pankaj",
    department: "Physiatrists",
    hospital: "Sat 4pm to 6pm",
    img:"./images/Dr Pankaj.jpeg"
  },

  {
    name: "Dr Swarnim",
    department: "Paediatric",
    hospital: "Sat 4pm to 6pm",
    img:"./images/Sawarnin.jpeg"
  }
]
const data2 = [
  {
    name: "Dr Mrinmoy",
    department: "General",
    hospital: "Sat 4pm to 6pm",
    img:"./images/mrinmoy.jpeg"
  },

  {
    name: "Dr Pandey",
    department: "General",
    hospital: "Sat 4pm to 6pm",
    img: "./images/DrPandey.jpg"
  },

]


const OnlineDoctor = () => {

  return (
    <div>
      <header>
        <h1>Doctor List</h1>
      </header>
      <div className="body">
        {data.map((elm) => (

          <div className='Doctor'>
            <img src={elm.img} alt="" />
            <div className='details'>
              <h1>{elm.name}</h1>
              <h4>{elm.department}</h4>
              <h3>{elm.hospital}</h3>
            </div>
            <div className='book'>
              <h4>Book</h4>
            </div>
          </div>
        )
        )}
      </div>
      {/* second rpw */}
      <div className="body">
        {data2.map((elm) => (

          <div className='Doctor'>
            <img src={elm.img} alt="" />
            <div className='details'>
              <h1>{elm.name}</h1>
              <h4>{elm.department}</h4>
              <h3>{elm.hospital}</h3>
            </div>
            <div className='book'>
              <h4>Book</h4>
            </div>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default OnlineDoctor
