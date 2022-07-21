import React, { useState } from "react";
import styles from "../../../Styles/AgentPanel/Properties.module.css";
import classes from "../../../Styles/AdminPanel/AddViewings.module.css";

const TenantDetails = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");

	return (
		<div className={`card ${classes.tenantDetails} ${styles.agentCard}`}>
			<div className="title">
				<h3>Tenant Details</h3>
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
			</div>
		</div>
	);
};

export default TenantDetails;
