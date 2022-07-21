import React from "react";
import CompanyInfo from "../../Components/ProviderPanel/Profile/CompanyInfo";
import Image from "../../Components/ProviderPanel/Profile/Image";
import InformationCard from "../../Components/ProviderPanel/Profile/InformationCard";
import SectionTitle from "../../Components/SectionTitle";
import classes from "../../Styles/ProviderPanel/Profile.module.css";

const Profile = () => {
	return (
		<div className={`section ${classes.profileSection}`}>
			<SectionTitle section="Profile" subject="Edit Profile" />
			<div className={classes.container}>
				<div className={classes.left}>
					<InformationCard />
					<Image />
				</div>
				<div className={classes.right}>
					<CompanyInfo />
				</div>
			</div>
			<div className="saveBtnContainer">
				<button className="saveBtn">Save</button>
			</div>
		</div>
	);
};

export default Profile;
