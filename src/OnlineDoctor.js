import React from 'react';
import "./OnlineDoctor.css";
// Not Completed
const data = [
  {
    name: "Dr Minakshi",
    department: "Medicine",
    hospital: "Sat 4pm to 6pm"
  },
  {
    name: "Dr Mrinmoy",
    department: "General",
    hospital: "Sat 4pm to 6pm"
  },
  {
    name: "Dr Swarnim",
    department: "Paediatric",
    hospital: "Sat 4pm to 6pm"
  }
]
const data2 = [
  {
    name: "Dr Pankaj",
    department: "Physiatrists",
    hospital: "Sat 4pm to 6pm"
  },
  {
    name: "Dr Pandey",
    department: "General",
    hospital: "Sat 4pm to 6pm"
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
            <img src="" alt="" />
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
            <img src="" alt="" />
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
