import React, { useState } from "react";
import classes from "../../../Styles/AdminPanel/AddProvider.module.css";

const PersonalInfo = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	return (
		<div className={`card ${classes.personalInfo}`}>
			<div className="title">
				<h3>Personal Information</h3>
			</div>
			<div className={classes.inputsContainer}>
				<input
					type="text"
					className={`input ${classes.input}`}
					placeholder="Name"
					value={name}
					setName={(e) => setName(e.target.value)}
				/>
				<input
					type="email"
					className={`input ${classes.input}`}
					placeholder="Email"
					value={email}
					setName={(e) => setEmail(e.target.value)}
				/>
				<input
					type="text"
					className={`input ${classes.input}`}
					placeholder="Mobile/Telephone"
					value={number}
					setName={(e) => setNumber(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default PersonalInfo;
