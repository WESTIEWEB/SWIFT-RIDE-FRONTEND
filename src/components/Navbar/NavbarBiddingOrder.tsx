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
	position: fixed;
	z-index: 2;
	background-color: #fff;
	width: 1440px;
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
	margin-left: 20px;
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

	color: #012a4a;
	&:link {
		color: #ff0000;
	}
	&:visited {
		color: #012a4a;
	}
	&:hover {
		color: FF00FF;
	}
	&:active {
		color: #0000ff;
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

	const Logout = () => {
		localStorage.clear();
		window.location.href = "/login";
	};
	return (
		<Container>
			<Wrapper>
				<Left>
					<Logo>
						<Link to="/riders-dashboard">
							<img src={logo} alt="swiftrider_logo" />
						</Link>
					</Logo>
					<Logotext>Swift Rider</Logotext>
				</Left>
				<Center>
					<MenuItem>
						<StyledLink to="/rider-biddings" className="biddingOrder_link">
							Bidding
						</StyledLink>
					</MenuItem>
					<MenuItem style={{ width: "80px" }}>Ride history</MenuItem>
					<MenuItem>Earnings</MenuItem>
					<MenuItem>Availability</MenuItem>
					<span>
						<ReactSwitch checked={checked} onChange={handleChange} />
					</span>
					<Link onClick={Logout} to="/login" style={{ textDecoration: "none" }}>
						<MenuItem>Logout</MenuItem>
					</Link>
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
