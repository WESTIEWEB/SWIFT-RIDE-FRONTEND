import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Login from "./pages/logins/Login";
// import "./App.css";
import Register from "./pages/Register/Register";

// setup  for fontend

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Register />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
