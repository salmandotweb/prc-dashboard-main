import React from "react";
import DocumentsCard from "../../Components/AgentPanel/Profile/DocumentsCard";
import InformationCard from "../../Components/AgentPanel/Profile/InformationCard";
import SectionTitle from "../../Components/SectionTitle";
import classes from "../../Styles/AgentPanel/Profile.module.css";

const Profile = () => {
	return (
		<div className={`section ${classes.agentProfile}`}>
			<SectionTitle section="Profile" subject="Edit Profile" />
			<div className={classes.cardContainer}>
				<InformationCard />
				<DocumentsCard />
			</div>
			<div className="saveBtnContainer">
				<button className="saveBtn">Save</button>
			</div>
		</div>
	);
};

export default Profile;
