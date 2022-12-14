import React from "react";
import registerBg from "../../assets/registerBg.svg";
import "./Register.css";
import Group15 from "../../assets/Group15.svg";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className="register-container">
			<div className="bg-background">
				<img src={registerBg} alt="Swift rider" />
				<h2 className="delivery">
					Delivery service just got easier, elegant & superb with Swift Rider
				</h2>
			</div>

			<div className="form-style">
				<div className="form-div">
					<div className="rider-top">
						<img src={Group15} alt="rider" />
						<p className="swift">
							Swift <br /> Rider
						</p>
					</div>

					<h3 className="signup-head">Sign Up as a Customer</h3>
					<div>
						<label className="labels">Name</label>
						<input type="name" placeholder="Enter your name" />
					</div>

					<div>
						<label className="labels">Phone Number</label>
						<input type="phone" placeholder="Enter your phone number" />
					</div>

					<div>
						<label className="labels">Email</label>
						<input type="email" placeholder="Enter your email" />
					</div>

					<div>
						<label className="labels">Password</label>
						<input type="password" placeholder="Enter your password" />
					</div>

					<div>
						<label className="labels">Confirm password</label>
						<input type="password" placeholder="Enter your password" />
					</div>

					<div className="btn-container">
						<button className="btnReg">Signup</button>
					</div>
					<div>
						<p className="pTag">
							Already have an account?{" "}
							<Link to="/login" className="sign">
								Sign in
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
