import logo from "../../assets/Logo.svg";
// import styled from "styled-components";
import navbar from "./navbar.module.css";

// const Container = styled.div`
// 	height: 96px;
// `;
// const Wrapper = styled.div`
// 	padding: 20px 20px;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// `;

// const Left = styled.div`
// 	flex: 1;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// `;

// const Center = styled.div`
// 	flex: 1;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// `;

// const Right = styled.div`
// 	flex: 1;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// `;

// const MenuItem = styled.div`
// 	font-size: 16px;
// 	cursor: pointer;
// 	margin-left: 25px;
// 	color: #012a4a;
// 	&:hover {
// 		color: #e02b45;
// 	}
// `;

// const Logo = styled.div`
// 	width: 48px;
// 	height: 48px;
// 	display: flex;
// 	align-items: center;
// `;

// const Logotext = styled.div`
// 	font-weight: bold;
// 	margin-left: 10px;
// 	font-size: 20px;
// `;

const Navbar = () => (
	<div className={navbar.container}>
		<div className={navbar.wrapper}>
			<div className={navbar.left}>
				<div className={navbar.logo}>
					<img src={logo} alt="swiftrider_logo" />
				</div>
				<div className={navbar.logotext}>Swift Rider</div>
			</div>
			<div className={navbar.center}>
				<div className={navbar.menuitem}>Home</div>
				<div className={navbar.menuitem}>About</div>
				<div className={navbar.menuitem}>Services</div>
				<div className={navbar.menuitem}>Contact Us</div>
			</div>
			<div className={navbar.right}>
				<div className={navbar.menuitem}>Login</div>
			</div>
		</div>
	</div>
);

export default Navbar;
