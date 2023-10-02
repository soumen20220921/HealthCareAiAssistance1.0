
import "./DataSet.css"
import { useState } from 'react';
// import Model from "./Model"

import { Button } from "./styles/Button";
// import { NavLink } from "react-router-dom";

const data =
  [
    {
      img: "https://png.pngtree.com/png-vector/20230325/ourmid/pngtree-3-star-vector-clipart-png-image_6665412.png",
      Standard: "PlanConSent",
      catagory: "For the basics",
      price: "$15",
      about: "PlaCaConSet, a multi-modal, multi-turn plant care conversational dataset, which consists of around 1K conversations spanning over ",
      link: "https://forms.gle/yKLF5w9B57CLbNks6"
    },
    {
      img: "https://img.freepik.com/free-vector/gradient-5-star-logo-template_23-2150342391.jpg",
      Standard: "ES-MDD",
      catagory: "For the professional",
      price: "$50",
      about: "ES-MDD is an empathy and severity-aware multi-modal medical dialogue (ES-MMD) corpus in English, where each utterance is annotated with its"
    },

  ]

const data2 =
  [

    {
      img: "https://seeklogo.com/images/1/4-star-logo-7EC0973792-seeklogo.com.png",
      Standard: "QueSemSpan",
      catagory: "For the small team",
      price: "$30",
      about: "QueSemSpan MedQA is a large-scale semantic information annotated medical multi-span question answering corpus, which contains intent and "
    },
    {
      img: "https://seeklogo.com/images/1/4-star-logo-7EC0973792-seeklogo.com.png",
      Standard: "RD-Dialogue",
      catagory: "For the small team",
      price: "$30",
      about: "RD-Dialogue is a conversational corpus having conversations between patient and doctor. Each utterance is annotated with intent and       "
    },
  ]

function DataSet() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }



  return (
    <>
      <div className="pop-up">
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <div className="p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dolore corporis similique autem voluptatem facilis ullam eligendi dignissimos saepe quis facere ratione aliquam delectus, esse aspernatur neque architecto officia earum.
              </div>
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        )}
      </div>

      <div className='content'>

        {data.map((eml) => (
          <div className="box no1">
            <div className="innerbox1">
              <img src={eml.img} alt="anc" />
            </div>
            <div className='innerbox2'>
              <h2>{eml.Standard}</h2>
              <h3>{eml.catagory}</h3>
              <h1>{eml.price}</h1>
              <h4> {eml.about}
                <button onClick={toggleModal} className="btn-modal">
                  more
                </button>
              </h4>


            </div>
            <div className='innerbox3'>
              <Button className="btn hireme-btn">
                <a href={eml.link} target="blank">get access</a>
              </Button>
            </div>
          </div>
        ))}


        {/* <div className="box no2"></div>
            <div className="box no3"></div> */}
      </div>



      {/* elm2 started */}
      <div className="pop-up">
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <div className="p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dolore corporis similique autem voluptatem facilis ullam eligendi dignissimos saepe quis facere ratione aliquam delectus, esse aspernatur neque architecto officia earum.
              </div>
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        )}
      </div>

      <div className='content'>

        {data2.map((eml) => (
          <div className="box no1">
            <div className="innerbox1">
              <img src={eml.img} alt="anc" />
            </div>
            <div className='innerbox2'>
              <h2>{eml.Standard}</h2>
              <h3>{eml.catagory}</h3>
              <h1>{eml.price}</h1>
              <h4> {eml.about}
                <button onClick={toggleModal} className="btn-modal">
                  more
                </button>
              </h4>


            </div>
            <div className='innerbox3'>
              <Button className="btn hireme-btn">
                <a href={eml.link} target="blank">get access</a>
              </Button>
            </div>
          </div>
        ))}


        {/* <div className="box no2"></div>
            <div className="box no3"></div> */}
      </div>
    </>
  )
}

export default DataSet
