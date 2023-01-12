// import NavbarProfile from "../../components/Navbar/NavbarProfile";
import DemoNav from "../../components/Navbar/DemoNavbar";
import React, { useState } from "react";
import dashboard_style from "./userDashboard.module.css";
import orderimg from "../../assets/Users_dashboard/orders.svg";
import msg1 from "../../assets/Users_dashboard/msg1.svg";
import msg2 from "../../assets/Users_dashboard/msg2.svg";
import overview from "../../assets/Users_dashboard/overview.svg";
import addresscontact from "../../assets/Users_dashboard/addresscontact.svg";
import emailcontact from "../../assets/Users_dashboard/emailcontact.svg";
import phonecontact from "../../assets/Users_dashboard/phonecontact.svg";
import { apiGetAndAuth } from "../../utils/api/axios";
import { Link } from "react-router-dom";
import profilePic from "../../assets/profilepic.png";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import Success from "../../assets/Success.svg";
import modalStyle from "../UserRequestRider/Modal2.module.css";

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
// console.log("My date now:  " ,removeTimeAndConvertTo12HourFormat("2022-12-21T11:58:01.571Z"))
const UserDashboard = () => {
	const [modal, setModal] = useState(false);
	const [modal2, setModal2] = useState(false);
	const [orders, setBiddings] = React.useState([]);
	const [completedOrders, setCompletedOrders] = React.useState(null);

	const toggleModal = () => {
		setModal(!modal);
	};
	const toggleModal2 = () => {
		setModal2(!modal2);
	};
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const access_token = localStorage.getItem("signature");
	console.log(access_token);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const getBiddings = async () => {
		// e.preventDefault();
		try {
			const response = await apiGetAndAuth("/users/my-orders", {
				headers: {
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					Authorization: `Bearer ${access_token}`,
				},
			});
			// console.log("myData: ", response?.data);
			setBiddings(response?.data?.Orders?.rows);
			console.log("myData: ", response?.data);
		} catch (err) {
			console.error("get_all_order", err);
		}
	};
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const getCompletedOrders = async () => {
		// e.preventDefault();
		try {
			const res = await apiGetAndAuth("/users/completed-orders", {
				headers: {
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					Authorization: `Bearer ${access_token}`,
				},
			});
			setCompletedOrders(res?.data?.count);
		} catch (error) {
			// console.error("get_completed_order", error);
		}
	};

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
			{/* <NavbarProfile /> */}
			<DemoNav />
			<div className={dashboard_style.user_dashboard_parent_div}>
				<div className={dashboard_style.middle_container}>
					<h1 className={dashboard_style.viewoverH1}>
						<img src={overview} width="30px" height="30px" />
						Overview
					</h1>
					{/* <div className={dashboard_style.second_container}> */}
					<div className={dashboard_style.orders_container}>
						<div className={dashboard_style.top_orders}>
							<span id={dashboard_style.orders}>Total Orders</span>
							<Link
								to="/request-rider"
								className={dashboard_style.userDashboardLink}
							>
								{" "}
								<span id={dashboard_style.request}>Make a Request</span>
							</Link>
						</div>
						<hr />
						<div className={dashboard_style.bottom_orders}>
							<span>
								<strong id={dashboard_style.order_number}>
									{completedOrders}
								</strong>
								<br />
								<br />
								<strong id={dashboard_style.orders_completed}>
									Orders Completed
								</strong>
							</span>
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
					<div className={dashboard_style.messages_container}>
						<p id={dashboard_style.messages}>Messages</p>
						<hr />
						<div id={dashboard_style.image_div}>
							<img
								id={dashboard_style.msg1}
								src={msg1}
								width="54px"
								height="49.5px"
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
							<br />
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
						{/* <hr /> */}
						{/* biddings.length > 0 ? <Your code> : <>No data Available<></> */}
						{orders?.length > 0 ? (
							orders.map((bidding: any) => (
								<div className={dashboard_style.order_stats} key={bidding.id}>
									<span className={dashboard_style.date}>
										{removeTimeAndFormatDate(bidding.createdAt)}
									</span>
									<span
										className={dashboard_style.status}
										onClick={toggleModal2}
									>
										{bidding.status}
									</span>
									<br />
									<br />
									<strong className={dashboard_style.space}>
										<span className={dashboard_style.orderNo}>
											Order No - {bidding.orderNumber}
										</span>
										<span className={dashboard_style.amount}>
											N{bidding.offerAmount}
										</span>
									</strong>
								</div>
							))
						) : (
							<p className={dashboard_style.para}>No data available</p>
						)}
					</div>
					<div className={dashboard_style.contacts_container}>
						<div className={dashboard_style.contact}>
							<p>Contact Us</p>
						</div>
						<hr />
						<div className={dashboard_style.bio}>
							<p id={dashboard_style.getInTouch}>Get in touch</p>
							<p id={dashboard_style.questions}>
								Any questions or remarks? Send us a message
							</p>
							<br />
							<div className={dashboard_style.company_contacts}>
								<img
									src={emailcontact}
									className={dashboard_style.contactUs_images1}
								/>
							</div>
							<div
								onClick={(e) => {
									window.location.href = "mailto:hello@swiftrider.com";
								}}
							>
								<p id={dashboard_style.contact_details1}>
									<a href="#">hello@swiftrider.com</a>
								</p>
							</div>
							<div className={dashboard_style.company_contacts}>
								<img
									src={phonecontact}
									className={dashboard_style.contactUs_images2}
								/>
							</div>
							<div>
								<p id={dashboard_style.contact_details2}>
									<a href="tel:+2348062898015">08062898015,</a>{" "}
									<a href="tel:+2347015950245">07015950245</a>
								</p>
							</div>
							<div className={dashboard_style.company_contacts}>
								<img
									src={addresscontact}
									className={dashboard_style.contactUs_images3}
								/>
							</div>
							<div>
								<p id={dashboard_style.contact_details3}>
									20, Abn Street, Banana Island, Lagos
								</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					{modal2 && (
						<div className={modalStyle.modal}>
							<div className={modalStyle.overlay}> </div>
							<div className={modalStyle.modal_content}>
								<img
									src={Success}
									alt="success"
									className={modalStyle.success}
								/>
								<h5 className={modalStyle.modalName}>Order Accepted </h5>
								<p className={modalStyle.modalText}>
									{" "}
									Your order has been accepted by{" "}
								</p>
								<h5 className={modalStyle.modalTitle}>Babatunde Akin</h5>

								<div className={modalStyle.modalArrange}>
									<button
										className={modalStyle.modalBtn1}
										onClick={toggleModal}
									>
										View Rider
									</button>
								</div>
							</div>
						</div>
					)}

					{modal && (
						<div className={modalStyle.modal}>
							<div className={modalStyle.overlay}> </div>
							<div className={modalStyle.modal_content2}>
								<h5 className={modalStyle.modalName}>
									Rider arriving in 8mins{" "}
								</h5>
								<img
									className={modalStyle.requestProfilePic}
									src={profilePic}
									alt="profilePic"
								/>
								<h5 className={modalStyle.modalTitle}>Babatunde Akin</h5>
								<p className={modalStyle.modalText}> 08031234567</p>
								<p className={modalStyle.modalNumber}> Lincense plate number</p>
								<p className={modalStyle.modalPlate}> RYC40CE</p>
								<p className={modalStyle.modalNo}>
									{" "}
									4.82 <AiFillStar />
								</p>

								<div className={modalStyle.modalArrange}>
									<button className={modalStyle.modalBtn3}>Call</button>
									<button className={modalStyle.modalBtn2}>Send Message</button>
								</div>
								<button
									className={modalStyle.close_modal}
									onClick={() => {
										setModal(false);
										setModal2(false);
									}}
								>
									<AiOutlineClose size={20} />
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
export default UserDashboard;
