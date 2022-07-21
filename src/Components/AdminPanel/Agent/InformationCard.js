import React, { useState } from "react";
import classes from "../../../Styles/AdminPanel/AddAgent.module.css";

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
					className="input"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="Email"
					className="input"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="text"
					className="input"
					placeholder="Phone Number"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
				/>
				<div className={classes.livingDetails}>
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
						onChange={(e) => setPostcode(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default InformationCard;
