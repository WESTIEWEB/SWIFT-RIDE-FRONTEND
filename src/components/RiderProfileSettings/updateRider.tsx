// eslint-disable-next-line no-unused-vars
import rUpdateProfile from "./updateRiderProfile.module.css";
import { FaPencilAlt } from "react-icons/fa";

const UpdateRiderProfile = () => {
	return (
		<div>
			<section className={rUpdateProfile.update_rider_section}>
				<div>
					<h2 className={rUpdateProfile.profileSet}>Profile Settings</h2>
				</div>
				<div className={rUpdateProfile.update_rider_section2}>
					<div className={rUpdateProfile.form}>
						<form className={rUpdateProfile.formfield}>
							<h5 className={rUpdateProfile.basicInfo}>BASIC INFORMATION</h5>
							<p className={rUpdateProfile.onlyYou}>
								Only you can view and edit your information
							</p>

							<label className={rUpdateProfile.firstMe}>First Name</label>
							<div className={rUpdateProfile.update_riderInput}>
								<input type="text" placeholder="Mathew" name="firstname" />
								<div className={rUpdateProfile.icon1}>
									<FaPencilAlt />
								</div>
							</div>

							<label className={rUpdateProfile.firstMe}>Last Name</label>
							<div className={rUpdateProfile.update_riderInput}>
								<input type="text" placeholder="Akintayo" name="lastname" />
								<div className={rUpdateProfile.icon1}>
									<FaPencilAlt />
								</div>
							</div>
							<label className={rUpdateProfile.firstMe}>Phone</label>
							<div className={rUpdateProfile.update_riderInput}>
								<input type="text" placeholder="07039770676" name="phone" />
								<div className={rUpdateProfile.icon1}>
									<FaPencilAlt />
								</div>
							</div>
							<label className={rUpdateProfile.firstMe}>Email</label>
							<div className={rUpdateProfile.update_riderInput}>
								<input
									type="text"
									placeholder="matthew@gmail.com"
									name="email"
								/>
								<div className={rUpdateProfile.icon1}>
									<FaPencilAlt />
								</div>
							</div>
							<input
								type="Submit"
								placeholder="Save"
								className={rUpdateProfile.Submit}
							/>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default UpdateRiderProfile;
