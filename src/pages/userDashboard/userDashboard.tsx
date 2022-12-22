import NavbarProfile from "../../components/Navbar/NavbarProfile";
import React from "react";
import styleD from "./userDashboard.module.css";
import orders from "../../assets/Users_dashboard/orders.svg";
import msg1 from "../../assets/Users_dashboard/msg1.svg";
import msg2 from "../../assets/Users_dashboard/msg2.svg";
import overview from "../../assets/Users_dashboard/overview.svg";
import addresscontact from "../../assets/Users_dashboard/addresscontact.svg";
import emailcontact from "../../assets/Users_dashboard/emailcontact.svg";
import phonecontact from "../../assets/Users_dashboard/phonecontact.svg";
import { Link } from "react-router-dom";
import { apiGet } from "../../utils/api/axios";

const UserDashboard = () => {
	const [biddings, setBiddings] = React.useState([]);
	const [completedOrders, setCompletedOrders] = React.useState(null);

	// eslint-disable-next-line @typescript-eslint/naming-convention
	const access_token = localStorage.getItem("signature");
	console.log(access_token);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const getBiddings = async () => {
		// e.preventDefault();
		try {
			const response = await apiGet("users/get-all-orders", {
				headers: {
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					Authorization: `Bearer ${access_token}`,
				},
			});
			console.log("myData: ", response?.data);
			setBiddings(response?.data?.orders?.rows);
		} catch (err) {
			console.error("get_all_order", err);
		}
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const getCompletedOrders = async () => {
		// e.preventDefault();
		try {
			const res = await apiGet("users/get-completed-orders", {
				headers: {
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					Authorization: `Bearer ${access_token}`,
				},
			});
			setCompletedOrders(res?.data?.count);
		} catch (error) {
			console.error("get_completed_order", error);
		}
	};
	console.log("bidding: ", biddings);

	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		const container = event.currentTarget;
		if (
			container.scrollHeight - container.scrollTop ===
			container.clientHeight
		) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			getBiddings();
		}
	};

	React.useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getBiddings();
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getCompletedOrders();
	}, []);
	return (
		<>
			<NavbarProfile />
			<div className={styleD.middle_container}>
				<h1 className={styleD.viewoverH1}>
					<img src={overview} width="30px" height="30px" />
					Overview
				</h1>
				{/* <div className={styleD.second_container}> */}
				<div className={styleD.orders_container}>
					<div className={styleD.top_orders}>
						<span id={styleD.orders}>Total Orders</span>
						<Link to="#" style={{ textDecoration: "none", marginTop: 20 }}>
							<span id={styleD.request}>Make a Request</span>
						</Link>
					</div>
					<hr />
					<div className={styleD.bottom_orders}>
						<span>
							<strong id={styleD.order_number}>{completedOrders}</strong>
							<br />
							<br />
							<strong id={styleD.orders_completed}>Orders Completed</strong>
						</span>
						<span id={styleD.image}>
							<img
								src={orders}
								id={styleD.orders_image}
								height="39.38px"
								width="36.32px"
							/>
						</span>
					</div>
				</div>
				<div className={styleD.messages_container}>
					<p id={styleD.messages}>Messages</p>
					<hr />
					<div id={styleD.image_div}>
						<img id={styleD.msg1} src={msg1} width="54px" height="49.5px" />
						<img id={styleD.msg2} src={msg2} width="54px" height="38.4px" />
					</div>
					<div id={styleD.no_messages}>
						<p id={styleD.msgP}>No Messages</p>
						<br />
						<p id={styleD.msgP2}>You curently do not have any message</p>
					</div>
				</div>
				<div className={styleD.myorders_container}>
					<div className={styleD.order_details}>
						<span id={styleD.orderzz}>My Orders</span>
						<Link to="#" style={{ textDecoration: "none" }}>
							<span className={styleD.seeAll}>See all</span>
						</Link>
					</div>
					<hr />
					<section style={{ overflow: "scroll" }} onScroll={handleScroll}>
						<br />
						{biddings?.length > 0 ? (
							biddings.map((bidding: any) => (
								<div className={styleD.order_stats} key={bidding.id}>
									<span className={styleD.date}>{bidding.createdAt}</span>
									<span className={styleD.status}>{bidding.status}</span>
									<br />
									<br />
									<strong className={styleD.space}>
										<span className={styleD.orderNo}>
											Order No - {bidding.orderNumber}
										</span>
										<span className={styleD.amount}>
											N{bidding.offerAmount}
										</span>
									</strong>
								</div>
							))
						) : (
							<p>No data available</p>
						)}
					</section>
				</div>
				<div className={styleD.contacts_container}>
					<div className={styleD.contact}>
						<p>Contact Us</p>
					</div>
					<hr />
					<div className={styleD.bio}>
						<p id={styleD.getInTouch}>Get in touch</p>
						<p id={styleD.questions}>
							Any questions or remarks? Send us a message
						</p>
						<br />
						<div className={styleD.company_contacts}>
							<img src={emailcontact} className={styleD.contactUs_images1} />
						</div>
						<div
							onClick={(e) => {
								window.location.href = "mailto:hello@swiftrider.com";
							}}
						>
							<p id={styleD.contact_details1}>
								<a href="#">hello@swiftrider.com</a>
							</p>
						</div>
						<div className={styleD.company_contacts}>
							<img src={phonecontact} className={styleD.contactUs_images2} />
						</div>
						<div>
							<p id={styleD.contact_details2}>
								<a href="tel:+2348062898015">08062898015,</a>{" "}
								<a href="tel:+2347015950245">07015950245</a>
							</p>
						</div>
						<div className={styleD.company_contacts}>
							<img src={addresscontact} className={styleD.contactUs_images3} />
						</div>
						<div>
							<p id={styleD.contact_details3}>
								20, Abn Street, Banana Island, Lagos
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserDashboard;
