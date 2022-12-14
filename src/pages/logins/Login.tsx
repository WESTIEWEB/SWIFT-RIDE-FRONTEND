// import React from "react";
// import Card from "../../components/Card/Card";
import loginbg from "../../assets/loginbg.svg";
// import circlelogo from "../../assets/circlelogo.svg";
import logodesign from "../../assets/logodesign.svg";
import "./Login.css";

const Login = () => {
	return (
		<div className="login-container">
			<div className="loginimg-container">
				<img src={loginbg} alt="rider" id="darken" />
				<p className="writeup">
					Delivery service just got easier, elegant & superb with Swift rider
				</p>
			</div>

			<div className="form-style">
				<form>
					<div className="parent">
						{/* <img className="image1" src={circlelogo} /> */}
						<img className="image2" src={logodesign} height="50px" />
						<h4>
							Swift <br />
							Rider
						</h4>
					</div>

					<h3 className="login-label">Login</h3>
					<div>
						<label id="emailId">Email</label>
						<input
							className="input-style"
							type="email"
							name="email"
							id="email"
							placeholder=" ✉️  Enter your email"
						/>
					</div>

					<div>
						<label id="passwordId">Password</label>
						<input
							className="input-style"
							type="password"
							name="password"
							id="password"
							placeholder="🔒    Enter your password"
						/>
					</div>

					<div>
						<h3 className="fpassword">Forgot password?</h3>
					</div>

					<div>
						<button className="login-btn">Login</button>
					</div>

					<div>
						<p id="signup">
							Don't have an account?
							<span className="create-style"> Create account</span>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
