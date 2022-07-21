import React from "react";
import classes from "../Styles/SectionTitle.module.css";

const SectionTitle = ({ section, subject }) => {
	return (
		<div className={classes.sectionTitle}>
			<p>
				<span className={classes.light}>{section}</span>
				<span className={classes.bold}>/{subject}</span>
			</p>
		</div>
	);
};

export default SectionTitle;
