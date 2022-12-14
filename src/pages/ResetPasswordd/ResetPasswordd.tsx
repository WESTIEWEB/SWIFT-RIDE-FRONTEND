import React from "react";
import "./ResetPasswordd.css";
import registerBg from "../../assets/registerBg.svg";
import Group15 from "../../assets/Group15.svg";

const ForgotPasswordd = () => {
  return (
    <div className="reset-container">
      <div>
        <img src={registerBg} alt="Dispatch rider" />
      </div>

      <div className="form-style">
       
          <div className="form-div">
            <div className="budylogo">
              <img src={Group15} alt="rider" />
              <p className="swift">
                Dispatch <br /> Buddy
              </p>
            </div>

            <h3 className="signup-head"> Reset Password</h3>

            <div>
              <label className="labels">New Password</label>
              <input type="password" placeholder="Enter your password"></input>
            </div>
            <div>
              <label className="labels"> Confirm Password</label>
              <input type="" placeholder="confirm your password"></input>
            </div>

            <div className="btn-container">
              <button className="btnReg">Reset Password</button>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default ForgotPasswordd;
