/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useEffect, useState } from "react";
import dashboard_style from "./userDashboard.module.css";
import rDashboard from "./RidersDashboard.module.css";
import orderimg from "../../assets/Users_dashboard/orders.svg";
import msg1 from "../../assets/Users_dashboard/msg1.svg";
import msg2 from "../../assets/Users_dashboard/msg2.svg";
import overview from "../../assets/Users_dashboard/overview.svg";
import addresscontact from "../../assets/Users_dashboard/addresscontact.svg";
import emailcontact from "../../assets/Users_dashboard/emailcontact.svg";
import phonecontact from "../../assets/Users_dashboard/phonecontact.svg";
import { Link } from "react-router-dom";
import { apiGetAndAuth } from "../../utils/api/axios";
import DemoNav from "../../components/Navbar/DemoNavbar";

function removeTimeAndFormatDate(datetimeString: string): string {
	// Parse the input string using the Date object
	const date = new Date(datetimeString);
	// Use the Intl.DateTimeFormat object to format the date
	const options: any = {
		weekday: "short",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	};
	const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
	return formattedDate;
}
const RidersDashboard = () => {
	const [ridersBill, setRidersBill] = useState([]);
	const [completedRides, setCompletedRides] = useState("");
	const signature = localStorage.getItem("signature");
	const config = {
		headers: {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			Authorization: `Bearer ${signature}`,
		},
	};
	useEffect(() => {
		async function fetchData() {
			if (signature === null) return;
			const response = await apiGetAndAuth(
				"/riders/rider-dashdoard-completed-orders",
				config
			);
			setCompletedRides(String(response?.data?.count));
			console.log(completedRides);
		}
		// async function getRidersBill() {
		// 	try {
		// 		// e.preventDefault();
		// 		if (signature === null) return;
		// 		const response = await apiGetAndAuth(
		// 			"/rider-dashboard-pending-orders",
		// 			config
		// 		);

		// 		if (response.status === 200) {
		// 			setRidersBill(response.data?.orders?.rows);
		// 		}
		// 	} catch (err: any) {
		// 		// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
		// 		if (err.response.message) {
		// 			console.log(err.message);
		// 		}
		// 	}
		// }
		void fetchData();
		// eslint-disable-next-line no-use-before-define
		void getRidersBill();
	}, []);
	async function getRidersBill() {
		try {
			// e.preventDefault();
			if (signature === null) return;
			const response = await apiGetAndAuth(
				"/riders/rider-dashboard-pending-orders",
				config
			);

			if (response.status === 200) {
				setRidersBill(response.data?.rows);
				console.log("bills", ridersBill);
			}
		} catch (err: any) {
			// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
			if (err.response.message) {
				console.log(err.message);
			}
		}
	}
	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		const container = event.currentTarget;
		if (
			container.scrollHeight - container.scrollTop ===
			container.clientHeight
		) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			void getRidersBill();
		}
	};

	// const call = (phone: string) => {
	// 	window.location.href = `tel:${phone}`;
	// };
	return (
		<>
			<DemoNav />
			<div className={dashboard_style.user_dashboard_parent_div}>
				<div className={dashboard_style.middle_container}>
					<h1 className={dashboard_style.viewoverH1}>
						<img
							style={{ marginRight: "8px" }}
							src={overview}
							width="30px"
							height="30px"
						/>
						Overview
					</h1>
					{/* <div className={dashboard_style.second_container}> */}
					<main className={dashboard_style.userD_main_container}>
						<div className={dashboard_style.orders_container}>
							<div className={dashboard_style.top_orders}>
								<div className={rDashboard.orderRequest}>
									<h1 className={rDashboard.totalOrdersH1}>Total Orders</h1>
									{ridersBill.length === 0 ? (
										<Link to="/journey-tracker">
											<button>View active Delivery</button>
										</Link>
									) : (
										ridersBill.map((order: any) => (
											// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
											<Link
												key={order.id}
												// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
												to={`/journey-tracker/${order.id}`}
											>
												<button>View active Delivery</button>
											</Link>
										))
									)}
								</div>
							</div>
							{/* <hr /> */}
							<div className={dashboard_style.bottom_orders}>
								<div className={dashboard_style.bt_orders_span}>
									<span>
										<strong id={dashboard_style.order_number}>
											{completedRides}
										</strong>
										<br />
										<br />
										<strong id={dashboard_style.orders_completed}>
											Rides Completed
										</strong>
									</span>
								</div>

								<div className={dashboard_style.bt_orders_span}>
									<span id={dashboard_style.image}>
										<img
											src={orderimg}
											id={dashboard_style.orders_image}
											height="39.38px"
											width="36.32px"
										/>
									</span>
								</div>
							</div>
						</div>
						<div className={dashboard_style.messages_container}>
							<p id={dashboard_style.messages}>Messages</p>
							<hr />
							<div id={dashboard_style.image_div}>
								<img
									id={dashboard_style.msg1}
									src={msg1}
									width="54px"
									height="49.5px"
									alt="message icon"
								/>
								<img
									id={dashboard_style.msg2}
									src={msg2}
									width="54px"
									height="38.4px"
								/>
							</div>
							<div id={dashboard_style.no_messages}>
								<p id={dashboard_style.msgP}>No Messages</p>
								<p id={dashboard_style.msgP2}>
									You curently do not have any message
								</p>
							</div>
						</div>
						<div
							className={dashboard_style.myorders_container}
							style={{ height: "350px", overflow: "scroll" }}
							onScroll={handleScroll}
						>
							<div className={dashboard_style.order_details}>
								<span id={dashboard_style.orderzz}>My Orders</span>
								<span className={dashboard_style.seeAll}>See all</span>
							</div>
							<hr />
							{/* biddings.length > 0 ? <Your code> : <>No data Available<></> */}
							{ridersBill?.length > 0 ? (
								ridersBill.map((bidding: any) => {
									const myStyle = {
										backgroundColor:
											bidding.status === "pending"
												? "rgba(252, 193, 52, 0.1)"
												: " rgba(52, 168, 83, 0.1)",
										color: bidding.status === "pending" ? "#F8B02B" : "#34A853",
										cursor: "pointer",
									};
									return (
										<div
											className={dashboard_style.order_stats}
											key={bidding.id}
										>
											<div className={dashboard_style.order_status_title}>
												<span className={dashboard_style.date}>
													{removeTimeAndFormatDate(bidding.createdAt)}
												</span>
												<span
													className={dashboard_style.status}
													// onClick={() =>
													// 	handleClick(bidding.id, bidding.status)
													// }
													style={myStyle}
												>
													<Link
														style={{ textDecoration: "none", color: "inherit" }}
														to={`/journey-tracker/${bidding.id}`}
													>
														{bidding.status}
													</Link>
												</span>{" "}
											</div>
											<div className={dashboard_style.space}>
												<span className={dashboard_style.orderNo}>
													Order No - {bidding.orderNumber}
												</span>
												<span className={dashboard_style.amount}>
													N
													{bidding.offerAmount
														.toString()
														.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
													.00
												</span>
											</div>
										</div>
									);
								})
							) : (
								<p className={dashboard_style.para}>No data available</p>
							)}
						</div>
						<div className={dashboard_style.contacts_container}>
							<p className={dashboard_style.contacts_parag}>Contact Us</p>
							<hr />
							<div className={dashboard_style.bio}>
								<p id={dashboard_style.getInTouch}>Get in touch</p>
								<br />
								<p id={dashboard_style.questions}>
									Any questions or remarks? Send us a message
								</p>
								<br />
								<div className={dashboard_style.contact_mail_phone}>
									<div
										onClick={(e) => {
											window.location.href = "mailto:hello@swiftrider.com";
										}}
										className={dashboard_style.company_contacts}
									>
										{" "}
										<img
											src={emailcontact}
											className={dashboard_style.contactUs_images1}
										/>
										<a href="#">hello@swiftrider.com</a>
									</div>
									<div className={dashboard_style.company_contacts}>
										<img
											src={phonecontact}
											className={dashboard_style.contactUs_images2}
										/>
										<a href="tel:+2348062898015">08062898015,</a>{" "}
										<a href="tel:+2347015950245">07015950245</a>
									</div>
									<div className={dashboard_style.company_contacts}>
										<img
											src={addresscontact}
											className={dashboard_style.contactUs_images3}
										/>
										20, Abn Street, Banana Island, Lagos
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
};
export default RidersDashboard;
