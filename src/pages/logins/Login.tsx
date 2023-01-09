/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link, useNavigate } from "react-router-dom";
import loginbg from "../../assets/loginbg.svg";
import logodesign from "../../assets/logodesign.svg";
import styled from "./Login.module.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const baseUrl = "http://localhost:4000";

const Login = () => {
	const [formData, setFormData] = useState({});
	const navigate = useNavigate();

	const handleChange = (e: any) => {
		console.log("changing data");
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			// riderRegisterConfig(formData);

			await axios
				.post(`${baseUrl}/users/login`, formData)
				.then((res) => {
					const signature = res.data.signature;
					const role = res.data.role;
					const userNmae = res.data.name;

					if (signature !== null) {
						localStorage.setItem("signature", signature);
						localStorage.setItem("role", role);
						localStorage.setItem("userName", userNmae);
						toast.success(res.data.message);
						setTimeout(() => {
							if (res.data.role === "rider") {
								navigate("/riders-dashboard");
								// } else if (res.data.role === "admin") {
								// 	navigate("/admin-dashboard");
							} else if (res.data.role === "user") {
								navigate("/user-dashboard");
							}
							// navigate("/user-dashboard");
						}, 2000);
					}
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
		<div className={styled.login_container}>
			<div className={styled.loginimg_container}>
				<img
					src={loginbg}
					alt="rider"
					id="darken"
					className={styled.img_style}
				/>
				<p className={styled.writeup}>
					Delivery service just got easier, elegant & superb with Swift rider
				</p>
			</div>

			<div className={styled.form_style}>
				<form className={styled.login_form} onSubmit={handleSubmit}>
					<div className={styled.parent}>
						<img className={styled.parentImg} src={logodesign} height="50px" />
						<Link to="/" style={{ textDecoration: "none" }}>
							<h4>
								Swift <br />
								Rider
							</h4>
						</Link>
					</div>
					<div className={styled.login_form_data}>
						<div>
							<h3 className={styled.login_label}>Login</h3>
						</div>
						<div className={styled.input_content}>
							<label className={styled.login_user_label} id="emailId">
								Email
							</label>
							<input
								className={styled.input_style}
								type="email"
								name="email"
								id="email"
								onChange={handleChange}
								placeholder=" ✉️  Enter your email"
							/>
						</div>

						<div className={styled.input_content}>
							<label className={styled.login_user_label} id="passwordId">
								Password
							</label>
							<input
								className={styled.input_style}
								type="password"
								name="password"
								onChange={handleChange}
								id="password"
								placeholder="🔒    Enter your password"
							/>
						</div>
					</div>
					<div className={styled.loginData_btn}>
						<div className={styled.login_fpassword}>
							<Link to="/forgotpasswordd">Forgot password?</Link>
						</div>

						<div className={styled.btn_container}>
							{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
							<button className={styled.btnReg} type="submit">
								login
							</button>
						</div>
						<div>
							<p id="signup">
								Don't have an account?
								<Link to="/signin" className="create-style">
									{" "}
									Create account{" "}
								</Link>
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
