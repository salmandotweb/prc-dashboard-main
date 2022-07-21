import React from "react";
import CompanyInfo from "../../Components/AdminPanel/Provider/CompanyInfo";
import PersonalInfo from "../../Components/AdminPanel/Provider/PersonalInfo";
import SectionTitle from "../../Components/SectionTitle";
import classes from "../../Styles/AdminPanel/AddProvider.module.css";

const AddProvider = () => {
	return (
		<div className={`section ${classes.addProvider}`}>
			<SectionTitle section="Providers" subject="Add New Provider" />
			<div className={classes.cardsContainer}>
				<PersonalInfo />
				<CompanyInfo />
			</div>
			<div className="saveBtnContainer">
				<button className="saveBtn">Save</button>
			</div>
		</div>
	);
};

export default AddProvider;
