import React from "react";
import classes from "../../../Styles/AdminPanel/DashboardCard.module.css";

const DashboardCard = ({ number, icon, title, properties, color }) => {
	return (
		<div className={`${classes.dashboardCard} ${color}`}>
			<div className={classes.left}>
				<div className={classes.icon}>{icon}</div>
				<div className={classes.properties}>
					<h3>{title}</h3>
					<span className={classes.line}></span>
					<p>These are the total avalaible {properties}</p>
				</div>
			</div>
			<div className={classes.number}>{number}</div>
		</div>
	);
};

export default DashboardCard;
