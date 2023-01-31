import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import "./home.css";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Services />
			<Footer />
		</div>
	);
};

export default Home;
