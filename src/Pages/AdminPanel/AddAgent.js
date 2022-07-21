import React from "react";
import InformationCard from "../../Components/AdminPanel/Agent/InformationCard";
import Notes from "../../Components/AdminPanel/Agent/Notes";
import SectionTitle from "../../Components/SectionTitle";
import classes from "../../Styles/AdminPanel/AddAgent.module.css";

const AddAgent = () => {
	return (
		<div className={`section ${classes.addAgent}`}>
			<SectionTitle section="Agent" subject="Add New Agent" />
			<div className={classes.cardsContainer}>
				<InformationCard />
				<Notes />
			</div>
			<div className="saveBtnContainer">
				<button className="saveBtn">Save</button>
			</div>
		</div>
	);
};

export default AddAgent;
