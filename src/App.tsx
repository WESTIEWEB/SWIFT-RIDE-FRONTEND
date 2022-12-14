import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
// import "./App.css";
import Register from "./pages/Register/Register";

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<Register />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
};

export default App;
