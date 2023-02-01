/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-irregular-whitespace */
import React, { useState } from "react";
import registerBg from "../../assets/registerBg.svg";
import Group15 from "../../assets/Group15.svg";
import { Link } from "react-router-dom";
import modern from "./Register.module.css";
import { toast } from "react-toastify";
import { apiPost } from "../../utils/api/axios";

const Register = () => {
	const [formData, setFormData] = useState({});
	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	console.log(formData);
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const result = await apiPost("/users/signup", formData);
			if (result.status === 201) {
				toast.success(result.data.message);
				setTimeout(() => {
					window.location.href = "/login";
				}, 2000);
			}
			// await axios
			// 	.post(`${baseUrl}/users/signup`, formData)
			// 	.then((res) => {
			// 		const signature = res.data.signature;
			// 		localStorage.setItem("signature", signature);
			// 		toast.success(res.data.message);
			// 		setTimeout(() => {
			// 			window.location.href = "/login";
			// 		}, 2000);
			// 	})
			// 	.catch((err) => {
			// 		console.log(err);
			// 		toast.error(err.response.data.Error);
			// 	});
		} catch (error: any) {
			console.log(error);
			// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
			if (error.response.data.Error) {
				toast.error(error.response.data.Error);
				// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
			} else if (error.request) {
				toast.error(error.message);
				// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
			} else if (error.message) {
				toast.error(error.message);
			}
		}
	};
	return (
		<div className={modern.singup_f_section}>
			<div className={modern.singup_form_data_container}>
				<div className={modern.singup_form_image}>
					<h1 className={modern.singup_section_h1}>
						Delivery service just got easier, elegant & superb with Dispatch
						Buddy
					</h1>
					{/* <img src={image} /> */}
				</div>
			</div>

			<div className={modern.singup_form_ctainer}>
				<div className={modern.singup_form_ctainer_innerDiv}>
					<div className={modern.singup_logo_div}>
						<Link to="/" style={{ textDecoration: "none" }}>
							<div className={modern.singup_form_logo}>
								<img src={Group15} alt="logo" />
								<span>
									Swift
									<br />
									Rider
								</span>
							</div>
						</Link>
					</div>
					<form className={modern.singup_form} onSubmit={handleSubmit}>
						<div className={modern.singup_form_data_content}>
							<h2 className={modern.singup_form_title}>Customer Signup</h2>

							<div className={modern.singup_form_label_ctn}>
								<div className={modern.singup_form_fieldctn}>
									<label className={modern.singup_form_label}>Full Name</label>
									<b className={`fa fa-envelope login_form_s_input`}>
										<input
											placeholder="Enter your fullname"
											className={modern.singup_form_input}
											type="text"
											id="name"
											name="name"
											onChange={handleChange}
										/>
									</b>
									<br />
									<label className={modern.singup_form_label}>Email</label>
									<b className={`fa fa-envelope login_form_s_input`}>
										<input
											placeholder="Enter your email"
											className={modern.singup_form_input}
											type="email"
											id="email"
											name="email"
											onChange={handleChange}
										/>
									</b>
									<br />
									<label className={modern.singup_form_label}>
										Phone Number
									</label>
									<b className={`fa fa-envelope login_form_s_input`}>
										<input
											placeholder="Enter your phone number"
											className={modern.singup_form_input}
											type="tel"
											id="phone"
											name="phone"
											onChange={handleChange}
										/>
									</b>
									<br />
									<label className={modern.singup_form_label}>Password</label>
									<b className={`fa fa-envelope login_form_s_input`}>
										<input
											placeholder="Enter your password"
											className={modern.singup_form_input}
											type="password"
											id="password"
											name="password"
											onChange={handleChange}
										/>
									</b>
									<br />
									<label className={modern.singup_form_label}>
										Confirm Password
									</label>

									<b className="fa fa-lock">
										<input
											placeholder="Confirm password"
											className={modern.singup_form_input}
											type="password"
											id="confirm_password"
											name="confirm_password"
											onChange={handleChange}
										/>
									</b>
									<br />
									<input
										className={`${modern.singup_form_input} ${modern.singup_form_s_input}`}
										type="submit"
										value="Signup"
									/>
									<div>
										<p className={modern.singup_form_p}>
											Already have an account?? <Link to="/login">Login</Link>
										</p>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		// <div className={modern.userregister_container}>
		// 	     {" "}
		// 	<div className={modern.userregbg_background}>
		// 		        <img src={registerBg} alt="Swift rider" />
		// 		       {" "}
		// 		<h2 className={modern.userregdelivery}>
		// 			          Delivery service just got easier, elegant & superb with
		// 			Swift Rider        {" "}
		// 		</h2>
		// 		     {" "}
		// 	</div>
		// 	       {" "}
		// 	<div className={modern.userregform_style}>
		// 		       {" "}
		// 		<div className={modern.userregform_div}>
		// 			         {" "}
		// 			<div className={modern.userregrider_top}>
		// 				           {" "}
		// 				<Link to="/">
		// 					              <img src={Group15} alt="rider" />
		// 					           {" "}
		// 				</Link>
		// 				           {" "}
		// 				<p className={modern.swift}>
		// 					             {" "}
		// 					<Link
		// 						to="/"
		// 						style={{ textDecoration: "none" }}
		// 						className={modern.swiftLink}
		// 					>
		// 						                Swift <br /> Rider              {" "}
		// 					</Link>
		// 					           {" "}
		// 				</p>
		// 				         {" "}
		// 			</div>
		// 			            <h3 className={modern.signup_head}>Customer Signup</h3>
		// 			         {" "}
		// 			<div>
		// 				            <label className={modern.labels}>Name</label>
		// 				           {" "}
		// 				<input
		// 					className={modern.registerinputs}
		// 					type="name"
		// 					name="name"
		// 					placeholder="Enter your name"
		// 					onChange={handleChange}
		// 				/>
		// 				         {" "}
		// 			</div>
		// 			           {" "}
		// 			<div>
		// 				            <label className={modern.labels}>Phone Number</label>
		// 				           {" "}
		// 				<input
		// 					className={modern.registerinputs}
		// 					type="phone"
		// 					placeholder="Enter your phone number"
		// 					name="phone"
		// 					onChange={handleChange}
		// 				/>
		// 				         {" "}
		// 			</div>
		// 			           {" "}
		// 			<div>
		// 				            <label className={modern.labels}>Email</label>
		// 				           {" "}
		// 				<input
		// 					className={modern.registerinputs}
		// 					type="email"
		// 					placeholder="Enter your email"
		// 					name="email"
		// 					onChange={handleChange}
		// 				/>
		// 				         {" "}
		// 			</div>
		// 			           {" "}
		// 			<div>
		// 				            <label className={modern.labels}>Password</label>
		// 				           {" "}
		// 				<input
		// 					className={modern.registerinputs}
		// 					type="password"
		// 					placeholder="Enter your password"
		// 					name="password"
		// 					onChange={handleChange}
		// 				/>
		// 				         {" "}
		// 			</div>
		// 			           {" "}
		// 			<div>
		// 				           {" "}
		// 				<label className={modern.labels}>Confirm password</label>
		// 				           {" "}
		// 				<input
		// 					className={modern.registerinputs}
		// 					type="password"
		// 					placeholder="Enter your password"
		// 					onChange={handleChange}
		// 					name="confirm_password"
		// 				/>
		// 				         {" "}
		// 			</div>
		// 			           {" "}
		// 			<div className={modern.btn_container}>
		// 				           {" "}
		// 				{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
		// 				           {" "}
		// 				<button className={modern.btn_Reg} onClick={handleSubmit}>
		// 					              Signup            {" "}
		// 				</button>
		// 				         {" "}
		// 			</div>
		// 			         {" "}
		// 			<div>
		// 				           {" "}
		// 				<p className={modern.pTag}>
		// 					              Already have an account?              {" "}
		// 					<Link
		// 						to="/login"
		// 						className="sign"
		// 						style={{ textDecoration: "none", color: "#f00" }}
		// 					>
		// 						                Sign in              {" "}
		// 					</Link>
		// 					           {" "}
		// 				</p>
		// 				         {" "}
		// 			</div>
		// 			       {" "}
		// 		</div>
		// 		     {" "}
		// 	</div>
		// 	   {" "}
		// </div>
	);
};
export default Register;
