import React from "react";
import "./RidersSignupForm.css";
import RiderImage from "../../assets/Riders_signup_assets/rider_image.svg";
import BikeLogo from "../../assets/Riders_signup_assets/bike_icon.svg";

const RidersSignup = () => {
	return (
		<div className="container">
			<div className="image_container">
				<img src={RiderImage} alt="placeholder_image_riders_signup_form" />
				<p>
					Delivery service just got easier, elegant & superb with Dispatch Buddy
				</p>
			</div>

			<div className="signup_form_field_container">
				<div className="form_bx">
					{/* ---------- LOGO ---------- */}
					<div className="logo">
						<div className="logo_image">
							<span>
								<img
									src={BikeLogo}
									alt="placeholder_image_riders_signup_form"
								/>
							</span>
						</div>
						<p>Dispatch Buddy</p>
					</div>

					<h2>Sign Up as a Rider</h2>

					{/* -------------- FORM -------------- */}
					<form action="">
						<div className="form_elem">
							<i className="fa fa-user icon"></i>
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="name"
								placeholder="Enter your name"
								required
							/>
						</div>

						<div className="form_elem">
							<i className="fa fa-phone icon"></i>
							<label htmlFor="phone_number">Phone Number</label>
							<input
								type="phone"
								name="phone_number"
								placeholder="Enter your phone number"
								required
							/>
						</div>

						<div className="form_elem">
							<i className="fa fa-envelope icon"></i>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								placeholder="Enter your email"
								required
							/>
						</div>

						<div className="form_elem">
							<i className="fa fa-city icon"></i>
							<label htmlFor="city">City</label>
							<select name="city" id="city" value="Select">
								<option placeholder="Select">Select</option>
								<option value="saab">Saab</option>
								<option value="mercedes">Mercedes</option>
								<option value="audi">Audi</option>
							</select>
						</div>

						<div className="form_elem">
							<i className="fa fa-cloud-upload icon"></i>
							<label htmlFor="bike_document">Bike documents</label>
							<input
								type="file"
								name="bike_document"
								placeholder="Upload"
								required
							/>
						</div>

						<div className="form_elem">
							<i className="fa fa-cloud-upload icon"></i>
							<label htmlFor="valid_id_card">Valid ID Card</label>
							<input
								type="file"
								name="valid_id_card"
								placeholder="Upload"
								required
							/>
						</div>

						<div className="form_elem">
							<i className="fa fa-cloud-upload icon"></i>
							<label htmlFor="passport_photo">Passport Photo</label>
							<input
								type="file"
								name="passport_photo"
								placeholder="Upload"
								required
							/>
						</div>

						<div className="form_elem">
							<i className="fa fa-lock icon"></i>
							<label htmlFor="Password">Password</label>
							<input
								type="password"
								name="Password"
								placeholder="Enter your Password"
								required
							/>
						</div>

						<div className="form_elem">
							<i className="fa fa-lock icon"></i>
							<label htmlFor="confirm_password">Confirm Password</label>
							<input
								type="password"
								name="confirm_password"
								placeholder="Enter your Password"
								required
							/>
						</div>

						<div className="form_elem">
							<i className=" icon"></i>
							<input type="submit" name="signup" value="Sign Up" required />
						</div>

						<p>
							Already have an account?
							<a href="#">
								<span className="signin">Sign In</span>
							</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RidersSignup;
