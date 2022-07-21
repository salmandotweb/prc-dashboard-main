import React from "react";
import { useState } from "react";
import classes from "../../../Styles/AgentPanel/Profile.module.css";

const InformationCard = () => {
	const [agentID, setAgentID] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [postcode, setPostcode] = useState("");

	return (
		<div className={`card ${classes.informationCard}`}>
			<div className="title">
				<h3>Information</h3>
				<input
					type="text"
					placeholder="Agent ID"
					className={`input ${classes.input}`}
					value={agentID}
					onChange={(e) => setAgentID(e.target.value)}
				/>
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
					placeholder="Phone Number"
					className="input"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
				/>
				<div className={classes.locationInputs}>
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
			</div>
		</div>
	);
};

export default InformationCard;
