import React from "react";
import registerBg from "../../assets/registerBg.svg";
import "./Register.css";
const Register = () => {
	return (
		<div className="register-container">
			<div className="bg-background">
				<img src={registerBg} alt="Dispatch rider" />
			</div>

			<div className="form-style">
				<div>
					<div className="child">
						<label className="labels">Name</label>
						<br />
						<input type="name" placeholder="Name" />
					</div>

					<div className="child">
						<label className="labels">Phone Number</label>
						<input type="phone" placeholder="Phone Number" />
					</div>

					<div className="child">
						<label className="labels">Email</label>
						<input type="email" placeholder="Email" />
					</div>

					<div className="child">
						<label className="labels">Password</label>
						<input type="password" placeholder="user password" />
					</div>

					<div className="child">
						<label className="labels">Confirm password</label>
						<input type="password" placeholder="Confirm password" />
					</div>

					<div className="btn-container">
						<button className="btnReg">Signup</button>
					</div>
					<div>
						<p>
							Already have an account? <span className="sign">Signin</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
