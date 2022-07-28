import React, { useState } from "react";
import classes from "../../../Styles/AdminPanel/AddTenants.module.css";

const InformationCard = () => {
	const [propertyID, setPropertyID] = useState("");
	const [propertyName, setPropertyName] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [postcode, setPostcode] = useState("");
	const [agentName, setAgentName] = useState("");

	return (
		<div className={`card ${classes.informationCard}`}>
			<div className="title">
				<h3>Information</h3>
				<input
					type="text"
					placeholder="Tenant ID"
					value={propertyID}
					onChange={(e) => setPropertyID(e.target.value)}
				/>
			</div>
			<div className={classes.inputsContainer}>
				<input
					type="text"
					placeholder="Property Name"
					className="input"
					value={propertyName}
					onChange={(e) => setPropertyName(e.target.value)}
				/>
				<div className={classes.aboutInputs}>
					<input
						type="text"
						placeholder="Street"
						className="input"
						value={street}
						onChange={(e) => setStreet(e.target.value)}
					/>
					<input
						type="text"
						placeholder="City"
						className="input"
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Postcode"
						className="input"
						value={postcode}
						onChange={(e) => setPostcode(e.target.value)}
					/>
				</div>
				<input
					type="text"
					placeholder="Agent Name (Optional)"
					className="input"
					value={agentName}
					onChange={(e) => setAgentName(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default InformationCard;
