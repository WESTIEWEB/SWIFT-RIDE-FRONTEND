import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Login from "./pages/logins/Login";

const App = () =>{
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/login" element={<Login/>} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
