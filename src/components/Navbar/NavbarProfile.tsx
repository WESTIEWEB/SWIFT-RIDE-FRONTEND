import logo from "../../assets/Logo.svg";
import bell from "../../assets/bell.svg";
import avatar from "../../assets/avatar.svg";
import styled from "styled-components";
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
	font-size: 16px;
	cursor: pointer;
	margin-left: 25px;
	color: #012a4a;
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

const Navbar = () => {
	const Logout = () => {
		localStorage.clear();
		window.location.href = "/login";
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
					<MenuItem>My Orders</MenuItem>
					<MenuItem>Payment</MenuItem>
					<Link onClick={Logout} to="/login">
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
