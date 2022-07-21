import React, { useState } from "react";
import classes from "../../../Styles/AdminPanel/AddViewings.module.css";

const PropertyDetails = () => {
	const [propertyID, setPropertyID] = useState("");
	const [propertyName, setPropertyName] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [postcode, setPostCode] = useState("");

	return (
		<div className={`card ${classes.propertyDetails}`}>
			<div className="title">
				<h3>Property Details</h3>
				<input
					type="text"
					className="input"
					placeholder="Property ID"
					value={propertyID}
					onChange={(e) => setPropertyID(e.target.value)}
				/>
			</div>
			<div className={classes.container}>
				<input
					type="text"
					className="input"
					placeholder="Property Name"
					value={propertyName}
					onChange={(e) => setPropertyName(e.target.value)}
				/>
				<div className={classes.inputsContainer}>
					<input
						type="text"
						className="input"
						placeholder="Street"
						value={street}
						onChange={(e) => setStreet(e.target.value)}
					/>
					<input
						type="text"
						className="input"
						placeholder="City"
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
					<input
						type="text"
						className="input"
						placeholder="Postcode"
						value={postcode}
						onChange={(e) => setPostCode(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default PropertyDetails;
