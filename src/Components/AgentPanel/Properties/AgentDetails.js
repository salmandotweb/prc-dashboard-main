import React, { useState } from "react";
import classes from "../../../Styles/AdminPanel/AddViewings.module.css";

const AgentDetails = () => {
	const [agentID, setAgentID] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [postcode, setPostcode] = useState("");

	return (
		<div className={`card ${classes.agentDetails}`}>
			<div className="title">
				<h3>Agent Details</h3>
				<input
					type="text"
					className="input"
					placeholder="Agent ID"
					value={agentID}
					onChange={(e) => setAgentID(e.target.value)}
				/>
			</div>
			<div className={classes.container}>
				<input
					type="text"
					className="input"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="email"
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
						onChange={(e) => setPostcode(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default AgentDetails;
