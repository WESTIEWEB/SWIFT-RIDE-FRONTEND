import React from "react";
import "./fPassCard.css";

const fPassCard = () => {
  return (
    <div className="h">
      <div className="Cover">
        <div className="text">
        
        <h3>Forgot Password</h3>
        <div className="size">
        <p className="nter">Enter the email associated with your account and we’ll send an email with instruction to reset your password</p>
        </div>
        </div>
        <div>
        <label className="labels">Email</label>
		<input type="Email" placeholder="Email"  className="fill"/>
        </div>
        
        <div>
            <button className="resetBtn">
                Reset Password
            </button>
        </div>
        <div>
            <button className="backLog">Back to Login</button>
        </div>
        
      </div>
    </div>
  );
};

export default fPassCard;
