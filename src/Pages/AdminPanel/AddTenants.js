import React from "react";
import DateTimeCard from "../../Components/AdminPanel/Tenants/DateTimeCard";
import InformationCard from "../../Components/AdminPanel/Tenants/InformationCard";
import SectionTitle from "../../Components/SectionTitle";
import classes from "../../Styles/AdminPanel/AddTenants.module.css";

const AddTenants = () => {
	return (
		<div className={`section ${classes.addTenants}`}>
			<SectionTitle section="Tenants" subject="Add new Tenant" />
			<div className={classes.cardsContainer}>
				<InformationCard />
				<DateTimeCard />
			</div>
			<div className="saveBtnContainer">
				<button className="saveBtn">Save</button>
			</div>
		</div>
	);
};

export default AddTenants;
