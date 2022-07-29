import React, { useState } from "react";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";

const PopularCategory = () => {
	const [propertyCategory, setPropertyCategory] = useState("");
	const handleChange = (e) => {
		setPropertyCategory(e.target.value);
	};
	return (
		<div className={`${classes.card} ${classes.category}`}>
			<div className={classes.title}>
				<h3>Popular Category</h3>
			</div>
			<div
				className={`${classes.checkboxContainer} ${classes.popularCategory}`}>
				<label htmlFor="properties">
					<input
						type="radio"
						id="properties"
						value="Properties"
						name="property"
						onChange={handleChange}
					/>
					Properties
				</label>
				<label htmlFor="room">
					<input
						type="radio"
						id="room"
						value="Room"
						name="property"
						onChange={handleChange}
					/>
					Room
				</label>
			</div>
		</div>
	);
};

export default PopularCategory;
