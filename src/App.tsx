import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import SentMail from "./pages/SentMail/MailSent";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<Register />} />
					<Route path="/forgotpassword" element={< ForgotPassword />} />
					<Route path="/resetpassword" element={< ResetPassword />} />
					<Route path="/sentmail" element={<SentMail />} />
					<Route path="/forgetpassword" element={<ForgetPassword />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
};

export default App;
