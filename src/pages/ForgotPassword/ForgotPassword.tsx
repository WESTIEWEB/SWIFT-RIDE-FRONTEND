import React from "react";
import ReusableInput from "../../components/ReusableInput/ReusableInput";
import ReusableButton from "../../components/ReusableButton/ReusableButton";
import styles from "./ForgotPassword.module.css"

const ForgotPassword = () => {
  return (
    <div style={{
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
      textAlign: "left"
      }}>
      <div style={{alignItems: "left", display: "", paddingRight: 50}}>
      <h1 className={styles.h1}>Forget Password</h1>
      <p className={styles.p}>
        Enter the email associated with your account and <br/>we will send an email
        with instruction to reset your <br/> password
      </p>
      </div>
      <ReusableInput label="Email" placeholder="Enter email" text="text" />
      <ReusableButton text="Reset Password" />


    </div>
  );
};

export default ForgotPassword;
