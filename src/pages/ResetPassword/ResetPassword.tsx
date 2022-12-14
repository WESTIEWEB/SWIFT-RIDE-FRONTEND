import React from 'react'
import ReusableInput from '../../components/ReusableInput/ReusableInput';
import ReusableButton from '../../components/ReusableButton/ReusableButton';
import styles from "../ForgotPassword/ForgotPassword.module.css"
import './ResetPassword.module.css'


const ResetPassword = () => {
  return ( <div style={{
    backgroundColor: "#E5E5E5",
    display:"flex",
    position:"relative",
    height:"95vh",
    flexDirection:"column",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 116,
    paddingBottom: 667,
    alignItems: "center",
    textAlign: "left",
    justifyContent: "left"
    }}>
      <div className='text'>
    <h1 className={styles.h1}>Create New Password</h1>
    <p className={styles.p}>
      Login to your account
    </p>
    </div>
    <div style={{alignItems: "center", display: "flex", flexDirection: "column"}}>
    
    <ReusableInput label="New Password" placeholder="New Password" text="text" />
    <ReusableInput label="Confirm Password" placeholder="Confirm Password" text="text" />
    <ReusableButton text="Reset Password" />
    </div>


  </div>
  )
}

export default ResetPassword