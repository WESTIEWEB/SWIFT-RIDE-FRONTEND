import "./Services.css";
import reliable from "../../assets/reliable.svg";
import time from "../../assets/time.svg";
import track from "../../assets/track.svg";
import headset from "../../assets/headset.svg";
import world from "../../assets/world.svg";
import order from "../../assets/order.svg";
import quality_riders from "../../assets/quality_riders.svg";

const Services = () => {
	return (
		<div className="container">
			<div className="servicesContainer">
				<h1>TopNotch Services</h1>
				<p>
					Quickly integrate powerful solutions that gives you more flexibility
					and control over your parcel shipping and logistics processes
				</p>
			</div>

			<div className="grid">
				<div className="column">
					<div className="card">
						<img src={reliable} alt="reliable" />
						<p className="cardTitle">Reliable and Secure</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
							maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus
							vestibulum, at nunc pellentesque ornare urna
						</p>
					</div>
					<div className="card">
						<img src={time} alt="time" />
						<p className="cardTitle">On-Time Delivery</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
							maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus
							vestibulum, at nunc pellentesque ornare urna
						</p>
					</div>
					<div className="card">
						<img src={track} alt="track" />
						<p className="cardTitle">Track your shipment</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
							maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus
							vestibulum, at nunc pellentesque ornare urna
						</p>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img src={headset} alt="headset" />
						<p className="cardTitle">Great Customer Service</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
							maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus
							vestibulum, at nunc pellentesque ornare urna
						</p>
					</div>
					<div className="card">
						<img src={world} alt="world" />
						<p className="cardTitle">Nationwide Delivery</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
							maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus
							vestibulum, at nunc pellentesque ornare urna
						</p>
					</div>
					<div className="card">
						<img src={order} alt="order" />
						<p className="cardTitle">Order Fulfilment</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
							maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus
							vestibulum, at nunc pellentesque ornare urna
						</p>
					</div>
				</div>
			</div>
			<div className="qualityriders">
				<div className="riderImage">
					<img src={quality_riders} alt="quality_riders" />
				</div>

				<div className="riderText">
					<h1>Quality Riders & Partners Ready To Deliver</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
						volutpat tortor ultricies tincidunt magna. Faucibus tempus pretium
						sed enim integer at aliquet a. Semper vel id lectus quis vitae,
						velit est. Orci mi sed dui viverra.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
