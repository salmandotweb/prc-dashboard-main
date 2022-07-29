import React, { useState } from "react";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";

const PropertyDetails = () => {
	const [propertySize, setPropertySize] = useState("");
	const [bedrooms, setBedrooms] = useState("");
	const [bathrooms, setBathrooms] = useState("");
	const [rooms, setRooms] = useState("");
	const [garage, setGarage] = useState("");
	const [year, setYear] = useState("");

	return (
		<div className={`${classes.card} ${classes.propertyDetails}`}>
			<div className={classes.title}>
				<h3>Property Details</h3>
			</div>
			<div className={classes.detailsInputsContainer}>
				<div
					className={`${classes.detailsInputsMobile} ${classes.detailsInputs}`}>
					<input
						type="text"
						className={`input ${classes.detailsInput}`}
						placeholder="Property Size"
						value={propertySize}
						onChange={(e) => {
							setPropertySize(e.target.value);
						}}
					/>
					<input
						type="text"
						className={`input ${classes.detailsInput}`}
						placeholder="Bedrooms"
						value={bedrooms}
						onChange={(e) => {
							setBedrooms(e.target.value);
						}}
					/>
					<input
						type="text"
						className={`input ${classes.detailsInput}`}
						placeholder="Bathrooms"
						value={bathrooms}
						onChange={(e) => {
							setBathrooms(e.target.value);
						}}
					/>
				</div>
				<div
					className={`${classes.detailsInputsMobile} ${classes.detailsInputs}`}>
					<input
						type="text"
						className={`input ${classes.detailsInput}`}
						placeholder="Rooms"
						value={rooms}
						onChange={(e) => {
							setRooms(e.target.value);
						}}
					/>
					<input
						type="text"
						className={`input ${classes.detailsInput}`}
						placeholder="Garage"
						value={garage}
						onChange={(e) => {
							setGarage(e.target.value);
						}}
					/>
					<input
						type="text"
						className={`input ${classes.detailsInput}`}
						placeholder="Year Built"
						value={year}
						onChange={(e) => {
							setYear(e.target.value);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default PropertyDetails;
