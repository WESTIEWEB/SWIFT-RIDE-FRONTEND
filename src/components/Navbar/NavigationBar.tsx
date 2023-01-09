/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import styled, { css } from "styled-components";
import bike_logo from "../../assets/Logo.svg";
import navStyles from "./NavigationBar.module.css";
import Ellipse5 from "../../assets/Riders_signup_assets/Ellipse5.png";
import Notification from "../../assets/Riders_signup_assets/Notification.png";
const NavMenu = styled.div`
	position: absolute;
	width: 1440px;
	height: 94px;
	left: 0px;
	top: 0px;
	display: flex;
	background: #f0f;
`;
const Item1 = styled.div`
	display: relative;
	margin: 20px;
	width: 15%;
	display: flex;
`;
const BikeLogo = styled.span`
	position: relative;
	width: 48px;
	height: 48px;
	display: inline-block;
	left: 0px;
	top: 0px;
	border-radius: 100%;
	// background: linear-gradient(152.55deg, #e02b45 53.21%, #fcc134 103.48%);
`;

const BikeLogoImg = styled.img`
	position: relative;
	left: 20%;
	right: 20%;
	top: 1%;
	bottom: 30%;
`;
const LogoTitle = styled.span`
	position: relative;
	left: 10px;
	top: 10px;
	margin: 0 0 0 10px;
	width: 120px;
	height: 48px;
	display: inline-block;
	font-family: "Inter";
	font-style: normal;
	font-weight: 800;
	font-size: 20px;
	line-height: 24px;

	color: #e02b45;

	/* Inside auto layout */

	flex: none;
	order: 1;
	flex-grow: 0;
`;
const Item2 = styled.div`
	width: 55%;
	/* margin-top: 10px; */
	margin: 30px 50px 20px 50px;
	display: flex;
`;
const LiItem2 = styled.span`
	width: 105px;
	height: 17px;

	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 17px;
	/* identical to box height */

	text-align: center;

	color: #21334f;

	margin: 0 0 0 15px;
	/* Inside auto layout */

	flex: none;
	order: 0;
	flex-grow: 0;
`;
const Item3 = styled.div`
	position: absolute;
	right: 0px;
	/* margin-left: 150px; */
	width: 30%;
	margin: 20px 0 20px 50px;
	display: flex;
	justify-content: center;
`;
const spanClass = css`
	width: 20%;
`;
const UlItem3 = styled.div`
	display: flex;
	width: 50%;
	margin: 10px 0 0 0;
	${spanClass}
`;
const NavigationBar = () => {
	return (
		<>
			<NavMenu>
				<Item1>
					<BikeLogo>
						<BikeLogoImg src={bike_logo} alt="bike-logo" />
					</BikeLogo>
					<LogoTitle>Swift Rider</LogoTitle>
				</Item1>
				<Item2>
					<LiItem2>Bidding</LiItem2>
					<LiItem2>Ride History</LiItem2>
					<LiItem2>Earnings</LiItem2>
					<LiItem2>Availability</LiItem2>

					<label className={navStyles.switch}>
						<input type="checkbox" checked />
						<span className={`${navStyles.slider} ${navStyles.round}`}></span>
					</label>
				</Item2>
				<Item3>
					<UlItem3>
						<span className="spanClass">
							<img src={Notification} alt="notification-bell" />
						</span>
						<span className="spanClass">
							<img src={Ellipse5} alt="profile-image" />
						</span>
						<span className={navStyles.profile}>Mathew</span>
						<span className={navStyles.profile}>Logout</span>
					</UlItem3>
				</Item3>
			</NavMenu>
		</>
	);
};

export default NavigationBar;
