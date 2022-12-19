import { useState } from "react";
// eslint-disable-next-line import/no-duplicates
import styled from "./RidersSignupForm.module.css";
// eslint-disable-next-line import/no-duplicates
import "./RidersSignupForm.module.css";
import RiderImage from "../../assets/Riders_signup_assets/rider_image.svg";
import BikeLogo from "../../assets/Riders_signup_assets/bike_icon.svg";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseUrl = "http://localhost:4000";

const RidersSignup = () => {
	const [formData, setFormData] = useState({});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			await axios
				.post(`${baseUrl}/riders/riders-signup`, formData)
				.then((res) => {
					const signature = res.data.signature;
					localStorage.setItem("signature", signature);
					toast.success(res.data.message);
					setTimeout(() => {
						window.location.href = "/login";
					}, 2000);
				})
				.catch((err) => {
					console.log(err);
					toast.error(err.response.data.Error);
				});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className={styled.container}>
			<div className={styled.image_container}>
				<img src={RiderImage} alt="placeholder_image_riders_signup_form" />
				<p className={styled.cp}>
					Delivery service just got easier, elegant & superb with Swift Riders
				</p>
			</div>
			<div className={styled.signup_form_field_container}>
				<div className={styled.form_bx}>
					{/* ---------- LOGO ---------- */}
					<div className={styled.logo}>
						<div className={styled.logo_image}>
							<span>
								<img
									src={BikeLogo}
									alt="placeholder_image_riders_signup_form"
								/>
							</span>
						</div>
						<div className={styled.desc}>Swift Riders</div>
					</div>
					<h3 className={styled.sub_title}>Sign Up as a Rider</h3>
					{/* -------------- FORM -------------- */}
					<form>
						<div className={styled.form_elem}>
							<i className="fa fa-user icon"></i>
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="name"
								placeholder="Enter your name"
								onChange={handleChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-phone icon"></i>
							<label htmlFor="phone">Phone Number</label>
							<input
								type="phone"
								name="phone"
								placeholder="Enter your phone number"
								onChange={handleChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-envelope icon"></i>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								placeholder="Enter your email"
								onChange={handleChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-city icon"></i>
							<label htmlFor="city">City</label>
							<input
								type="text"
								id="city"
								name="city"
								placeholder="City"
								onChange={handleChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-cloud-upload icon"></i>
							<label htmlFor="documents">Bike documents</label>
							<input
								type="file"
								name="documents"
								placeholder="Upload"
								onChange={handleChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-cloud-upload icon"></i>
							<label htmlFor="validID">Valid ID Card</label>
							<input
								type="file"
								name="validID"
								placeholder="Upload"
								onChange={handleChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-cloud-upload icon"></i>
							<label htmlFor="passport">Passport Photo</label>
							<input
								type="file"
								name="passport"
								placeholder="Upload"
								onChange={handleChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-lock icon"></i>
							<label htmlFor="Password">Password</label>
							<input
								type="password"
								name="password"
								placeholder="Enter your Password"
								onChange={handleChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-lock icon"></i>
							<label htmlFor="confirmPassword">Confirm Password</label>
							<input
								type="password"
								name="confirmPassword"
								placeholder="Enter your Password"
								onChange={handleChange}
							/>
						</div>

						<div className="btn-container">
							{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
							<button className={styled.buttonReg} onClick={handleSubmit}>
								Signup
							</button>
						</div>
						{/* <div className={styled.form_elem}>
							<i className=" icon"></i>
							<input
								type="submit"
								name="signup"
								value="Sign Up"
								id={styled.submit}
								onClick={handleSubmit}
							/>
						</div> */}
						<p>
							Already have an account?
							<a href="#">
								<span className="signin" style={{ textAlign: "center" }}>
									Sign In
								</span>
							</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};
export default RidersSignup;
