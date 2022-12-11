import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";

const App = () =>{
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Home/>} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
