import React, { useState } from "react";
import NavbarProfile from "../../components/Navbar/NavbarProfile";
import requestRider from "../UserRequestRider/RequestRider.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Modal2.css";

import back from "../../assets/back.png";

const baseUrl = "http://localhost:4000";

function RequestRider() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	console.log(formData);
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			await axios
				.post(`${baseUrl}/users/order-ride`, formData, {
					headers: {
						// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
						Authorization: `Bearer ${localStorage.getItem("signature")}`,
					},
				})
				.then((res) => {
					toast.success(res.data.message);
					setTimeout(() => {
						navigate("/userDashboard");
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
		<div className={requestRider.requestOverAll}>
			<NavbarProfile />
			<div className={requestRider.requestContainer}>
				<div className={requestRider.requestFirst}>
					<button className={requestRider.requestBtn}>
						{" "}
						<img src={back} alt="back" />
					</button>
					<h4 className={requestRider.requestTitle}>Request a Rider</h4>

					<div className={requestRider.requestFirstLeft}>
						<label className={requestRider.requestLabel}>
							Pick up Location
						</label>
						<input
							className={requestRider.requestInput}
							onChange={handleChange}
							type="text"
							placeholder="Enter pick up Location"
							name="pickupLocation"
						/>

						<label className={requestRider.requestLabel}>
							Drop off Location
						</label>
						<input
							className={requestRider.requestInput}
							onChange={handleChange}
							type="text"
							placeholder="Enter drop off location"
							name="dropOffLocation"
						/>

						<label className={requestRider.requestLabel}>
							Drop off Phone Number
						</label>
						<input
							className={requestRider.requestInput}
							onChange={handleChange}
							type="text"
							placeholder="Enter drop off phone number"
							name="dropOffPhoneNumber"
						/>

						<label className={requestRider.requestLabel}>
							Package Description
						</label>
						<input
							className={requestRider.requestInput}
							onChange={handleChange}
							type="text"
							placeholder="Enter Pickup Location"
							name="packageDescription"
						/>

						<label className={requestRider.requestLabel}>Offer (NGN)</label>
						<input
							className={requestRider.requestInput}
							onChange={handleChange}
							type="number"
							placeholder="Enter an amount"
							name="offerAmount"
						/>

						{/* <Link to="/request-rider-success" className={requestRider.requestLink} ><input type="submit"  onClick={toggleModal} className={requestRider.requestSubmit} value="Order ride" /></Link> */}
						<input
							type="submit"
							// eslint-disable-next-line @typescript-eslint/no-misused-promises
							onClick={handleSubmit}
							className={requestRider.requestSubmit}
							value="Order ride"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RequestRider;
