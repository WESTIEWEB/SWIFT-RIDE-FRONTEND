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
import RequestRider from "./pages/UserRequestRider/RequestRider";
import Modal from "./pages/UserRequestRider/Modal";
import BidingOrder from "./pages/RiderBiddingOrder/RiderBiddingOrder";
import UserDashboard from "./pages/UserDashboard/userDashboard";
import RidersDashboard from "./pages/RidersDashboard/RidersDashboard";
import { ProtectUserRoute, ProtectRiderRoute } from "./context/ProtectRoute";
import NavigationBar from "./components/Navbar/NavigationBar";
import RiderProfileSetting from "./pages/RiderProfileSettingPage/RiderProfile";

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
						path="/request-rider"
						element={
							<ProtectUserRoute>
								<RequestRider />
							</ProtectUserRoute>
						}
					/>
					<Route path="/request-rider-success" element={<Modal />} />
					<Route
						path="/user-dashboard"
						element={
							<ProtectUserRoute>
								<UserDashboard />
							</ProtectUserRoute>
						}
					/>

					<Route
						path="/rider-biddings"
						element={
							<ProtectRiderRoute>
								<BidingOrder />
							</ProtectRiderRoute>
						}
					/>
					<Route
						path="/riders-dashboard"
						element={
							<ProtectRiderRoute>
								<RidersDashboard />
							</ProtectRiderRoute>
						}
					/>
					<Route
						path="/users/resetpasswordd/:token"
						element={<ResetPasswordd />}
					/>
					<Route
						path="/user-profilesetting"
						element={
							<ProtectUserRoute>
								<ProfileSetting />
							</ProtectUserRoute>
						}
					/>
					<Route
						path="/rider-profilesetting"
						element={
							<ProtectRiderRoute>
								<RiderProfileSetting />
							</ProtectRiderRoute>
						}
					/>
					<Route
						path="/riders/rider-dashboard-pending-orders"
						element={<h1>404 Not Found</h1>}
					/>
					<Route
						path="/riders/rider-dashboard-completed-orders"
						element={<h1>404 Not Found</h1>}
					/>
					<Route path="/all-biddings" element={<h1>404 Not Found</h1>} />
					<Route path="/nav-menu" element={<NavigationBar />} />
					<Route path="*" element={<h1>404 Not Found</h1>} />
				</Routes>
			</Router>
		</React.Fragment>
	);
};

export default App;
