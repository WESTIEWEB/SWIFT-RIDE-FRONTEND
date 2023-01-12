// import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import DemoNav from "../../components/Navbar/DemoNavbar";

const Home = () => {
	return (
		<div>
			<DemoNav />
			<div>
				<Hero />
				<Services />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
