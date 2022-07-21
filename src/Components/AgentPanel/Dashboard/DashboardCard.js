import React from "react";
import classes from "../../../Styles/AgentPanel/Dashboard.module.css";
import UploadDocument from "./UploadDocument";

const DashboardCard = () => {
	return (
		<div className={`card ${classes.dashboardCard}`}>
			<div className={classes.cardTitle}>
				<h1>Hey John,</h1>
				<h1>Verfication Needed</h1>
				<p>
					Please upload your verification documents before you can use your
					account. Your account will be unlocked once we have verified your
					documents. You will be notified via email with the status of your
					account.
				</p>
			</div>

			<div className={classes.uploadDocumentsContainer}>
				<div className={classes.left}>
					<UploadDocument />
					<UploadDocument />
					<UploadDocument />
					<UploadDocument />
					<UploadDocument />
					<UploadDocument />
				</div>
				<div className={classes.right}>
					<img src="/assets/verify.svg" alt="verify" />
				</div>
			</div>
			<button className={`btn ${classes.submitBtn}`}>Submit</button>
		</div>
	);
};

export default DashboardCard;
