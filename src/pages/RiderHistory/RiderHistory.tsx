import NavbarProfile from "../../components/Navbar/NavbarProfile";
import RHistoryTable from "../../components/RHistoryTable/RHistoryTable";
import "./RiderHistory.module.css";

const RiderHistory = () => {
	return (
		<div className="riderhistory">
			<NavbarProfile />
			<div className="container">
				<RHistoryTable />
			</div>
		</div>
	);
};

export default RiderHistory;
