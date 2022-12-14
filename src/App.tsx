import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import UpdateRiderProfile from "./pages/ProfileUpdate/UpdateRiderProfile";

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/updateRiderProfile" element={<UpdateRiderProfile />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
};

export default App;
