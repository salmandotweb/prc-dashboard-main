import React from "react";
import AgentDetails from "../../Components/AdminPanel/Viewings/AgentDetails";
import DateTime from "../../Components/AdminPanel/Viewings/DateTime";
import PropertyDetails from "../../Components/AdminPanel/Viewings/PropertyDetails";
import TenantDetails from "../../Components/AdminPanel/Viewings/TenantDetails";
import SectionTitle from "../../Components/SectionTitle";
import classes from "../../Styles/AdminPanel/AddViewings.module.css";

const AddViewings = () => {
	return (
		<div className={`section ${classes.addViewings}`}>
			<SectionTitle section="Viewings" subject="Add New Viewing" />
			<div className={classes.cardsContainer}>
				<div className={classes.left}>
					<PropertyDetails />
					<TenantDetails />
				</div>
				<div className={classes.right}>
					<AgentDetails />
					<DateTime />
				</div>
			</div>
			<div className="saveBtnContainer">
				<button className="saveBtn">Save</button>
			</div>
		</div>
	);
};

export default AddViewings;
