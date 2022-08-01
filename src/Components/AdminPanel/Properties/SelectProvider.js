import React, { useState, useEffect } from "react";
import Select from "react-select";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";
import { addProvider } from "../../../features/addPropertySlice";
import { useDispatch } from "react-redux";

const options = [
	{ value: "provider 1", label: "Provider 1" },
	{ value: "provider 2", label: "Provider 2" },
	{ value: "provider 3", label: "Provider 3" },
];

const SelectProvider = () => {
	const [selectedOption, setSelectedOption] = useState("");

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			addProvider({
				provider_type: selectedOption.value,
			})
		);
	}, [selectedOption]);

	return (
		<div className={`${classes.card} ${classes.selectProvider}`}>
			<div className={classes.title}>
				<h3>Select Provider</h3>
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

export default SelectProvider;
