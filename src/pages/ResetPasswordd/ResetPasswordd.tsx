import React from "react";
import registerBg from "../../assets/registerBg.svg";
import Group15 from "../../assets/Group15.svg";
import { Link } from "react-router-dom";
import rest from "./ResetPasswordd.module.css";

const ForgotPasswordd = () => {
	return (
		<div className={rest.reset_container}>
			<div>
				<img src={registerBg} alt="Dispatch rider" />
			</div>

			<div className={rest.form_style}>
				<form className={rest.form_div}>
					<div className={rest.budylogo}>
						<img src={Group15} alt="rider" />
						<p className={rest.swift}>
							Swift <br /> Rider
						</p>
					</div>

					<h3 className={rest.signup_head}> Reset Password</h3>
					<div className={rest.input_form}>
						<div>
							<label className={rest.labels}>New Password</label>
							<input
								type="password"
								name="password"
								className={rest.input}
								placeholder="Enter your password"
							></input>
						</div>
						<div>
							<label className={rest.labels}> Confirm Password</label>
							<input
								type=""
								name="confirmPassword"
								className={rest.input}
								placeholder="confirm your password"
							></input>
						</div>

						<Link to="/login" className={rest.btnReg}>
							Reset Password
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ForgotPasswordd;
