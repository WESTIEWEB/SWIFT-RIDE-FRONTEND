import "./Services.css";
import reliable from "../../assets/reliable.svg";
import time from "../../assets/time.svg";
import track from "../../assets/track.svg";

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
			</div>
		</div>
	);
};

export default Services;
