import React from "react";
import registerBg from "../../assets/registerBg.svg";
import "./Register.css";
import nameIcon from "../../assets/nameIcon.svg";

import Group15 from "../../assets/Group15.svg";
const Register = () => {
	return (
		<div className="register-container">
			<div className="bg-background">
				<img src={registerBg} alt="Dispatch rider" />
				<h2>
					Delivery service just got easier, elegant & superb with Swift Rider
				</h2>
			</div>

			<div className="form-style">
				<div className="form-top"></div>
				<div className="form-div">
					<div>
						<img src={Group15} alt="rider" />
						<p className="swift">
							Swift <br /> Rider
						</p>
					</div>

					<h3 className="signup-head">Sign Up as a Customer</h3>
					<div>
						<label className="labels">Name</label>
						<input type="name" placeholder="Name" />
					</div>

					<div>
						<label className="labels">Phone Number</label>
						<input type="phone" placeholder="Phone Number" />
					</div>

					<div>
						<label className="labels">Email</label>
						<input type="email" placeholder="Email" />
					</div>

					<div>
						<label className="labels">Password</label>
						<input type="password" placeholder="user password" />
					</div>

					<div>
						<label className="labels">Confirm password</label>
						<input type="password" placeholder="Confirm password" />
					</div>

					<div className="btn-container">
						<button className="btnReg">Signup</button>
					</div>
					<div>
						<p>
							Already have an account? <span className="sign">Sign in</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
