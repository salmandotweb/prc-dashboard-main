import React, { useState, useEffect } from "react";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";
import { addPropularCategory } from "../../../features/addPropertySlice";
import { useDispatch } from "react-redux";

const PopularCategory = () => {
	const [propertyCategory, setPropertyCategory] = useState("");
	const handleChange = (e) => {
		setPropertyCategory(e.target.value);
	};

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			addPropularCategory({
				Popular_category: propertyCategory,
			})
		);
	}, [propertyCategory]);

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
						name="propertyCategory"
						onChange={handleChange}
					/>
					Properties
				</label>
				<label htmlFor="room">
					<input
						type="radio"
						id="room"
						value="Room"
						name="propertyCategory"
						onChange={handleChange}
					/>
					Room
				</label>
			</div>
		</div>
	);
};

export default PopularCategory;
