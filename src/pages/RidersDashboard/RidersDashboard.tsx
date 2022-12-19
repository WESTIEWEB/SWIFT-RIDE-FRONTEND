import { useEffect, useState } from "react";
import NavbarProfile from "../../components/Navbar/NavbarProfile";
import rDashboard from "./RidersDashboard.module.css";
import overviewRider from "../../assets/overviewRider.svg";
import shoppingBag from "../../assets/shoppingBag.svg";
import { TiMessages } from "react-icons/ti";
import { VscLocation } from "react-icons/vsc";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "../../utils/api/axios";

const RidersDashboard = () => {
	const [data, setData] = useState("");
	useEffect(() => {
		async function fetchData() {
			const signature = localStorage.getItem("signature");
			if (signature === null) return;
			const config = {
				headers: {
					Authorization: `Bearer ${signature}`,
				},
			};
			await axios
				.get(
					"http://localhost:4000/riders/rider-dashdoard-completed-orders",
					config
				)
				.then((res) => {
					setData(String(res.data.totalOrders));
				});
		}
		fetchData().catch(console.error);
	}, []);
	return (
		<div className={rDashboard.container}>
			<NavbarProfile />
			<div className={rDashboard.subcontainer}>
				<div className={rDashboard.overviewHeader}>
					<img src={overviewRider} alt="overview" />
					<h1 className={rDashboard.overviewh1}>Overview</h1>
				</div>
				<div className={rDashboard.gridArea}>
					<div className={rDashboard.totalOrders}>
						<div className={rDashboard.orderRequest}>
							<h1 className={rDashboard.totalOrdersH1}>Total Orders</h1>
							<Link to="/all-biddings">
								<button className={rDashboard.makeRequest}>
									Accept Request
								</button>
							</Link>
						</div>
						<div className={rDashboard.ordersCompleted}>
							<h1 className={rDashboard.orders1}>{data}</h1>
							<h2 className={rDashboard.ordersH2}>Rides completed</h2>
							<img
								className={rDashboard.shoppingBag}
								src={shoppingBag}
								alt="shoppingBag"
							/>
						</div>
					</div>
					<div className={rDashboard.myOrders}>
						<div className={rDashboard.myOrdersee}>
							<h1 className={rDashboard.ordersMy}>My Rides</h1>
							<a href="#" className={rDashboard.seeAllOrders}>
								See all
							</a>
						</div>
						<div className={rDashboard.pendingTime}>
							<p className={rDashboard.todayBread}>Today, 4:15PM</p>
							<span className={rDashboard.pendingRides}>
								Order No - 1836897632
							</span>

							<p className={rDashboard.orderNos}>Pending</p>
							<span className={rDashboard.orderCash}>#2,200.00</span>
						</div>
						<div className={rDashboard.pendingTime}>
							<p className={rDashboard.todayBread}>Today, 10:15AM</p>
							<span className={rDashboard.pendingRides}>
								Order No - 1836897632
							</span>

							<p className={rDashboard.orderNos1}>Pending</p>
							<span className={rDashboard.orderCash}>#5,000.00</span>
						</div>
						<div className={rDashboard.pendingTime}>
							<p className={rDashboard.todayBread}>Yesterday, 10:15AM</p>
							<span className={rDashboard.pendingRides}>
								Order No - 1836897632
							</span>

							<p className={rDashboard.orderNos1}>Pending</p>
							<span className={rDashboard.orderCash}>#5,000.00</span>
						</div>
						<div className={rDashboard.pendingTime}>
							<p className={rDashboard.todayBread}>Yesterday, 10:15AM</p>
							<span className={rDashboard.pendingRides}>
								Order No - 1836897632
							</span>

							<p className={rDashboard.orderNos}>Pending</p>
							<span className={rDashboard.orderCash}>#2,200.00</span>
						</div>
						<div className={rDashboard.pendingTime}>
							<p className={rDashboard.todayBread}>Yesterday, 10:15AM</p>
							<span className={rDashboard.pendingRides}>
								Order No - 1836897632
							</span>

							<p className={rDashboard.orderNos1}>Pending</p>
							<span className={rDashboard.orderCash}>#5,000.00</span>
						</div>
					</div>
					<div className={rDashboard.messages}>
						<div className={rDashboard.messagesTopic1}>
							<h1 className={rDashboard.messagesTopic}>Messages</h1>
						</div>
						<div className={rDashboard.messagesIcons}>
							<div className={rDashboard.iconMessage}>
								<TiMessages className={rDashboard.tiMessage} />
							</div>
							<h1 className={rDashboard.noMessage}>No Messages</h1>
							<p className={rDashboard.noMessageP}>
								You currently do not have any message
							</p>
						</div>
					</div>
					<div className={rDashboard.Contact}>
						<div className={rDashboard.usContact}>
							<h1 className={rDashboard.usContact1}>Contact us</h1>
						</div>
						<div className={rDashboard.getIntouch}>
							<h1 className={rDashboard.getIntouch1}>Get in touch</h1>
							<p className={rDashboard.getInSend}>
								Any question or remarks? Send us a message.
							</p>
						</div>
						<div className={rDashboard.contactDetails}>
							<p className={rDashboard.emailAddress}>
								{" "}
								<MdOutlineEmail /> hello@swiftridder.com
							</p>

							<p className={rDashboard.phoneNum}>
								<BsTelephone /> 08099776655
							</p>

							<p className={rDashboard.homeAddress}>
								<VscLocation />
								25, Uhkorunmi street, Ohuhen, Edo
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RidersDashboard;
