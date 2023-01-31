import "./Hero.css";
import hero from "../../assets/hero.svg";

const Hero = () => {
	return (
		<div>
			<div className="Container">
				<div className="ImageContainer">
					<div className="imageOverlay"></div>
					<div className="mainText">
						<div className="maintexttogether">
							<h1 className="hero_h1">
								Fast, Reliable and Quality Dispatch Service
							</h1>
							<p className="hero_p">Send. Track. Receive.</p>
						</div>
						<div className="buttondiv">
							<button className="button1">Register as a Customer</button>
							<button className="button2">Register as a Rider</button>
						</div>
					</div>

					<img src={hero} className="mainimage" alt="hero" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
