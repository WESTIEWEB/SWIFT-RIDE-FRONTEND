import React from 'react'
import "./ForgetPassword.css";

const ForgetPassword = () => {
  return (
    <div className="forgetpassword">
        <div className="indiv">
            <h1 className="words">Forgot Password</h1>
            <p className="p">Enter the email associated with your account and <br/> we’ll send an email with instruction to reset your <br/> password</p>
        </div>

        <div className="label">
        <label className="labels">Email</label>
		<input type="Email" placeholder="Email" />
        </div>
        <div>
            <button className="reset-btn">
                Reset Password
            </button>
        </div>

    </div>
  )
}

export default ForgetPassword