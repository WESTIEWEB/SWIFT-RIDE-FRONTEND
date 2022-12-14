import ReusableButton from "../../components/ReusableButton/ReusableButton";
import "./MailSent.css"
import React from 'react'
import Email from '../../assets/Email.svg'

const MailSent = () => {
  return (
    <div className="h">
    <div className="Cover">
        <div className="image"><img src={Email} alt=""></img></div>
        <div className="text">
            <h3>Check your mail</h3>
            <p>We have sent a password 
                recover <br/> instruction to your account.</p>
        </div>
        <ReusableButton text="Open email app"></ReusableButton>
    </div>
    </div>
  )
}

export default MailSent