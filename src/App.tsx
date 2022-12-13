import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import RidersSignup from "./pages/RidersSignupForm/RidersSignup";
import "./App.css";

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/riders-signup" element={<RidersSignup />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
};

export default App;
