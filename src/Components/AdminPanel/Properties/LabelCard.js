import React, { useState, useEffect } from "react";
import Select from "react-select";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";
import { addProperty } from "../../../features/addPropertySlice";
import { useDispatch } from "react-redux";

const options = [
	{ value: "available", label: "Available" },
	{ value: "let", label: "Let" },
	{ value: "unavailable", label: "UnAvailable" },
];

const LabelCard = () => {
	const [selectedOption, setSelectedOption] = useState("");

	// console.log(selectedOption.value);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			addProperty({
				property_status: selectedOption.value,
			})
		);
	}, [selectedOption]);

	return (
		<div className={`${classes.card} ${classes.labelCard}`}>
			<div className={classes.title}>
				<h3>Label</h3>
			</div>
			<div className={classes.dropdown}>
				<Select
					defaultValue={selectedOption}
					onChange={setSelectedOption}
					options={options}
					className={classes.select}
				/>
			</div>
		</div>
	);
};

export default LabelCard;
