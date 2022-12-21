import logo from "../../assets/Logo.svg";
import bell from "../../assets/bell.svg";
import avatar from "../../assets/avatar.svg";
import styled from "styled-components";
import { useState } from "react";
import ReactSwitch from "react-switch";
import { Link } from "react-router-dom";

const Container = styled.div`
	height: 96px;
`;
const Wrapper = styled.div`
	padding: 20px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Center = styled.div`
	span {
		margin-left: 25px;
	}
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MenuItem = styled.div`
	cursor: pointer;
	margin-left: 25px;
	color: #012a4a;
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 17px;
	text-decoration: none;
	&:hover {
		color: #e02b45;
	}
`;

const Logo = styled.div`
	width: 48px;
	height: 48px;
	display: flex;
	align-items: center;
`;

const Logotext = styled.div`
	font-weight: bold;
	margin-left: 10px;
	font-size: 20px;
`;

const StyledLink = styled(Link)`
	color: #f00;
	text-decoration: none;
	font-family: "Inter";
	font-style: normal;
	font-weight: 900;
	font-size: 14px;
	line-height: 17px;
	/* identical to box height */

	text-align: center;

	color: #000;
	&:hover {
		color: #e02b45;
	}
	&:active {
		color: #e02b45;
	}
`;

const Navbar = () => {
	const [checked, setChecked] = useState(true);
	// const Logout = () => {
	// 	localStorage.clear();
	// 	window.location.href = "/login";
	// };
	const handleChange = (val: boolean) => {
		setChecked(val);
	};
	return (
		<Container>
			<Wrapper>
				<Left>
					<Logo>
						<img src={logo} alt="swiftrider_logo" />
					</Logo>
					<Logotext>Swift Rider</Logotext>
				</Left>
				<Center>
					<MenuItem>
						<StyledLink to="/riderbidingorder">Bidding</StyledLink>
					</MenuItem>
					<MenuItem>Ride history</MenuItem>
					<MenuItem>Earnings</MenuItem>
					<MenuItem>Availability</MenuItem>
					<span>
						<ReactSwitch checked={checked} onChange={handleChange} />
					</span>
				</Center>
				<Right>
					<div className="config" style={{ display: "flex" }}>
						<img src={bell} alt="notification" />
						<img src={avatar} alt="avatar" style={{ marginLeft: 20 }} />
						<p className="userName" style={{ marginLeft: 10, marginTop: 5 }}>
							Matthew
						</p>
					</div>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
