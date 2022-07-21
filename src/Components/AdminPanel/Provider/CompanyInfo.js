import React, { useState } from "react";
import classes from "../../../Styles/AdminPanel/AddProvider.module.css";

const CompanyInfo = () => {
	const [address, setAddress] = useState("");
	const [companyAddress, setCompanyAddress] = useState("");
	const [companyNumber, setCompanyNumber] = useState("");
	return (
		<div className={`card ${classes.companyInfo}`}>
			<div className="title">
				<h3>Company Information</h3>
			</div>
			<div className={classes.inputsContainer}>
				<input
					type="text"
					className={`input ${classes.input}`}
					placeholder="Office Address"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
				<input
					type="text"
					className={`input ${classes.input}`}
					placeholder="Registered Company Address"
					value={companyAddress}
					onChange={(e) => setCompanyAddress(e.target.value)}
				/>
				<input
					type="text"
					className={`input ${classes.input}`}
					placeholder="Registered Company Number"
					value={companyNumber}
					onChange={(e) => setCompanyNumber(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default CompanyInfo;
