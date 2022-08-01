import React, { useEffect, useState } from "react";
import { addPropertyType } from "../../../features/addPropertySlice";
import { useDispatch } from "react-redux";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";

const PropertyCard = () => {
	const [propertyType, setPropertyType] = useState("");
	const handleChange = (e) => {
		setPropertyType(e.target.value);
	};

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			addPropertyType({
				property_type: propertyType,
			})
		);
	}, [propertyType]);

	return (
		<div className={`${classes.propertyTypes} ${classes.card}`}>
			<div className={classes.title}>
				<h3>Property Type</h3>
			</div>
			<div className={classes.checkboxContainer}>
				<label htmlFor="detached">
					<input
						type="radio"
						id="detached"
						value="Detached"
						name="property"
						onChange={handleChange}
					/>
					Detached
				</label>
				<label htmlFor="terace">
					<input
						type="radio"
						id="terace"
						value="End of Terraced"
						name="property"
						onChange={handleChange}
					/>
					End of Terraced
				</label>
				<label htmlFor="flat">
					<input
						type="radio"
						id="flat"
						value="Flat"
						name="property"
						onChange={handleChange}
					/>
					Flat
				</label>
				<label htmlFor="houseShare">
					<input
						type="radio"
						id="houseShare"
						value="House Share"
						name="property"
						onChange={handleChange}
					/>
					House Share
				</label>
				<label htmlFor="Studio">
					<input
						type="radio"
						id="studio"
						value="Studio"
						name="property"
						onChange={handleChange}
					/>
					Studio
				</label>
				<label htmlFor="terraced">
					<input
						type="radio"
						id="terraced"
						value="Terraced"
						name="property"
						onChange={handleChange}
					/>
					Terraced
				</label>

				<label htmlFor="townHouse">
					<input
						type="radio"
						id="townHouse"
						value="Town House"
						name="property"
						onChange={handleChange}
					/>
					Town House
				</label>
				<label htmlFor="warehouse">
					<input
						type="radio"
						id="warehouse"
						value="Warehouse"
						name="property"
						onChange={handleChange}
					/>
					Warehouse
				</label>
				<label htmlFor="semiDetached">
					<input
						type="radio"
						id="semiDetached"
						value="Semi-Detached"
						name="property"
						onChange={handleChange}
					/>
					Semi-Detached
				</label>
			</div>
		</div>
	);
};

export default PropertyCard;
