import React, { useState} from 'react'
import profilePic from '../../assets/profilepic.png'
import requestRider from '../UserRequestRider/Modal.module.css'
import {AiFillStar } from "react-icons/ai";
import Success from '../../assets/success.svg';
import { AiOutlineClose } from 'react-icons/ai'
import './Modal2.css'



function Modal() {
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    const toggleModal2 = () => {
        setModal2(!modal2)
    }
  return (
        <div>
            <div>
                <button onClick={toggleModal2}>kevwe</button>
            </div>
            { modal2 && <div className="modal">
            <div className="overlay"> </div>
                <div className="modal-content">
                        <img src={Success} alt="success" className="success" />
                        <h5 className="modalName">Order Accepted </h5>
                        <p className="modalText"> Your order has been accepted by </p>
                        <h5 className="modalTitle">Babatunde Akin</h5>


                <div className="modalArrange">
                <button className="modalBtn1" onClick={toggleModal}>View Rider</button>
            
            </div>
        </div>
        </div>
        }



        { modal && <div className="modal">
            <div className="overlay"> </div>
                <div className="modal-content2">
                        <h5 className="modalName">Rider arriving in 8mins </h5>
                        <img className="requestProfilePic" src={profilePic} alt="profilePic"  />
                        <h5 className="modalTitle">Babatunde Akin</h5>
                        <p className="modalText"> 08031234567</p>
                        <p className="modalNumber"> Lincense plate number</p>
                        <p className="modalPlate"> RYC40CE</p>
                        <p className="modalNo"> 4.82 <AiFillStar /></p>

                <div className="modalArrange">
                <button className="modalBtn1">Call</button>
                <button className="modalBtn2">Send Message</button>
            </div>
            <button className="close-modal"><AiOutlineClose /></button>
        </div>
        </div>
        }



        </div>

  )
}

export default Modal