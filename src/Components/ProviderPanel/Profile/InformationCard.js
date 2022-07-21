import React, { useState } from "react";
import classes from "../../../Styles/ProviderPanel/Profile.module.css";

const InformationCard = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	return (
		<div className={`card ${classes.infoCard}`}>
			<div className="title">
				<h3>Personal Information</h3>
			</div>
			<div className={classes.inputsContainer}>
				<input
					type="text"
					placeholder="Name"
					className="input"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Email"
					className="input"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Mobile/Telephone"
					className="input"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default InformationCard;
