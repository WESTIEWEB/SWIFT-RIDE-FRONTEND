import React from 'react'
import logo from '../images/logo.svg'
import bell from '../images/bell.svg'
import avatar from '../images/pic.svg'
import { BsToggleOn } from "react-icons/bs"
import './NavBar.css'


function NavBar() {
  return (
    <nav className="navbar">
            <div className="navbarContainer1">
                <img src={logo} alt="logo" className="logo"/>
                <h6 className="logoText">Swift Rider</h6>
            </div>
            <div className="navbarContainer2">
                <ul className="navbar__menu">
                    <li ><a href="" className="navbar__item">Bidding</a> </li>
                    <li ><a href="" className="navbar__item">History</a> </li>
                    <li ><a href="" className="navbar__item">Earnings</a> </li>
                    <li ><a href="" className="navbar__item">Availability</a> </li><BsToggleOn  className="switch"/>
                </ul>
            </div>
            <div className="navbarContainer3">
                <img src={bell} alt="notification" className="item"/>
                <img src={avatar} alt="pic" className="item"/>
                <h4 className="item2">Matthew</h4>
            </div>
        </nav>
  )
}

export default NavBar