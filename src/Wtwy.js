import React from 'react'

const Wtwy = () => {
  const img = {
    // height:"300px",
    // width:"100%",
    // padding:"30px",
    // display:"flex",
    // alignItems: 'center',
    justifyContent: 'center',
  }
  const outerdiv = {
    // height:"300px",
    // width:"100%"
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "20px 50px"
  }
  const text = {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    margin: "25px 100px ",
    color: "#3F5BB5",


  }
  const text2 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "50px 100px ",
    padding: "0 0 30px 0",

  }

  return (

    <>


      <div style={outerdiv}>
        <div  >
          <img style={img} src=".\images\wtwy.webp" alt="" />
        </div>
      </div>
      {/* <div style={outerdiv}> */}
      <div style={text}><h1 style={{ fontWeight: "400", fontSize: "3rem", color: "#3F5BB5" }}>Why a Healthcare AI Assistant would be helpful?</h1></div>
      {/* </div> */}
      <div style={text2}>
        <h2 style={{ fontSize: "2rem", fontWeight: "300" }}> In the past five years, dozens of surveys and reports indicate an unbalanced doctor-to-population ratio. These reports firmly suggest that the alarming figures need to be improved by increasing the number of healthcare professionals and better utilizing their time. With the motivation to assist doctors and ease early diagnosis, the proposed automatic disease diagnosis assistant conducts a thorough symptom investigation and prepares a diagnosis report for doctors in the real world. </h2>
      </div>
      <div style={text}><h1 style={{ fontWeight: "400", fontSize: "3rem", color: "#3F5BB5" }}>About the AI assistant:</h1></div>
      <div style={text2}>
        <h2 style={{ fontSize: "2rem", fontWeight: "300" }}> The assistant is the first point of conduct of patients which acts as a healthcare receptionist. It performs an initial investigation and prepares a summary report for the doctor. They inform the relevant doctor cabin, and when the patient finally reaches the doctor, they have the patient's context. It helps them to perform further investigation and diagnosis. It saves a fraction of doctors' time, which could be utilized more efficiently. It can chat and talk across multiple languages. Also, it can observe visual symptoms reported by the patient /investigated by the assistant.  </h2>
      </div>
    </>
  )
}

export default Wtwy;

