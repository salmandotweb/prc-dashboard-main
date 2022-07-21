import React, { useState } from "react";
import classes from "../../../Styles/ProviderPanel/Profile.module.css";

const CompanyInfo = () => {
	const [officeAddress, setOfficeAddress] = useState("");
	const [companyAddress, setCompanyAddress] = useState("");
	const [companyNumber, setCompanyNumber] = useState("");
	return (
		<div className={`card ${classes.companyInfo}`}>
			<div className="title">
				<h3>Company Information</h3>
			</div>
			<div className={classes.inputsContainer}>
				<input
					type="address"
					className="input"
					placeholder="Office Address"
					value={officeAddress}
					onChange={(e) => setOfficeAddress(e.target.value)}
				/>
				<input
					type="address"
					className="input"
					placeholder="Registered Company Address"
					value={companyAddress}
					onChange={(e) => setCompanyAddress(e.target.value)}
				/>
				<input
					type="text"
					className="input"
					placeholder="Registered Company Number"
					value={companyNumber}
					onChange={(e) => setCompanyNumber(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default CompanyInfo;
