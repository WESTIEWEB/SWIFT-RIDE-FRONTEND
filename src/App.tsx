import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Login from "./pages/logins/Login";
// import "./App.css";
import Register from "./pages/Register/Register";
import RidersSignup from "./pages/RidersSignupForm /RidersSignup";
// import ForgotPasswordd from "./pages/ForgotPasswordd/ForgotPasswordd";
import MailSent from "./pages/SentMail/MailSent";
import ResetPasswordd from "./pages/ResetPasswordd/ResetPasswordd";
import ProfileSetting from "./pages/ProfileSetting/ProfileSetting";
// import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
// import VendorDashboard from "./pages/VendorDashboard/VendorDashboard";
import { ToastContainer } from "react-toastify";
import ForgetPasswordCard from "./components/fPassCard/fPassCard";
import RidersDashboard from "./pages/RidersDashboard/RidersDashboard";
import UserDashboard from "./pages/userDashboard/userDashboard";
import UpdateRiderProfile from "./pages/UpdateRiderProfile/UpdateRiderProfile";

import RequestRider from "./pages/UserRequestRider/RequestRider";
import Modal from "./pages/UserRequestRider/Modal";
import BidingOrder from "./pages/RiderBidingOrder/RiderBidingOrder";
// import { ProtectAdminRoute, ProtectRiderRoute } from "./context/ProtectRoute";

// setup  for fontend

const App = () => {
	return (
		<React.Fragment>
			<ToastContainer />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signin" element={<Register />} />
					<Route path="/riders-signup" element={<RidersSignup />} />
					<Route path="/sentmail" element={<MailSent />} />
					<Route path="/forgotpasswordd" element={<ForgetPasswordCard />} />

					<Route
						path="/users/resetpasswordd/:token"
						element={<ResetPasswordd />}
					/>
					<Route path="/profilesetting" element={<ProfileSetting />} />
					<Route path="/users/dashboard" element={<UserDashboard />} />
					<Route path="/riders/dashboard" element={<RidersDashboard />} />
					<Route path="/riders/all-biddings" element={<RidersDashboard />} />
					<Route
						path="/riders/updateRiderProfile"
						element={<UpdateRiderProfile />}
					/>
					<Route path="/request-rider" element={<RequestRider />} />
					<Route path="/request-rider-success" element={<Modal />} />
					<Route path="/riderbidingorder" element={<BidingOrder />} />

				</Routes>
			</Router>
		</React.Fragment>
	);
};

export default App;
