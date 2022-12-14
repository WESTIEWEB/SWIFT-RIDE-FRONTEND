import "./UpdateRiderProfile.css";
import { FaPencilAlt } from "react-icons/fa";
import NavBar from "../../components/NavBar/NavBar";

function updateRiderProfile() {
	return (
		<div>
			<NavBar />
			<section className="section">
				<div>
					<h2>Profile Settings</h2>
				</div>
				<div className="section2">
					<div className="form">
						<form className="form-field">
							<h5>BASIC INFORMATION</h5>
							<p>Only you can view and edit your information</p>

							<label>First Name</label>
							<div className="input">
								<input type="text" placeholder="Mathew" name="firstname" />
								<div className="icon1">
									<FaPencilAlt />
								</div>
							</div>

							<label>Last Name</label>
							<div className="input">
								<input type="text" placeholder="Akintayo" name="lastname" />
								<div className="icon1">
									<FaPencilAlt />
								</div>
							</div>
							<label>Phone</label>
							<div className="input">
								<input type="text" placeholder="07039770676" name="phone" />
								<div className="icon1">
									<FaPencilAlt />
								</div>
							</div>
							<label>Email</label>
							<div className="input">
								<input
									type="text"
									placeholder="matthew@gmail.com"
									name="email"
								/>
								<div className="icon1">
									<FaPencilAlt />
								</div>
							</div>
							<input type="Submit" placeholder="Save" className="" />
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}

export default updateRiderProfile;
