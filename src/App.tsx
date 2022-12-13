import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProfileSetting from "./pages/ProfileSetting/ProfileSetting";

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/profile-settings" element={<ProfileSetting />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
};

export default App;
