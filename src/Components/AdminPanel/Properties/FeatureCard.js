import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";
import { IoAddCircleSharp, IoCloseCircle } from "react-icons/io5";
import { addProperty } from "../../../features/addPropertySlice";
import { useDispatch } from "react-redux";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Feature = ({ value, children }) => {
	return (
		<label className={classes.checkbox}>
			<Field type="checkbox" name="checked" value={value} />
			{value}
			{children}
		</label>
	);
};

const getLocalFeatures = () => {
	let features = localStorage.getItem("features");
	if (features) {
		return JSON.parse(localStorage.getItem("features"));
	} else {
		return [];
	}
};

const FeatureCard = () => {
	const [showFeature, setShowFeature] = useState(false);
	const [newFeature, setNewFeature] = useState("");
	const [features, setFeatures] = useState(getLocalFeatures());
	const [byDefaultFeatures, setByDefaultFeatures] = useState([
		"Air Conditioning",
		"Balcony",
		"Barbeque",
		"Basement",
		"Bike Storage",
		"Car Parking",
		"Central Heating",
		"Concierge",
		"Disabled Access",
		"Double Glazing",
		"Driveway",
		"En Suite",
	]);
	const [checkedFeatures, setCheckedFeatures] = useState([]);

	const handleChange = (event) => {
		setNewFeature(event.target.value);
	};

	const handleNewFeature = (event) => {
		event.preventDefault();
		if (newFeature !== "") {
			setNewFeature(event.target.value);
			setFeatures([...features, newFeature]);
			setNewFeature("");
		}
	};

	// delete from local storage
	const handleDelete = (index) => {
		let newFeatures = [...features];
		newFeatures.splice(index, 1);
		setFeatures(newFeatures);
	};

	useEffect(() => {
		localStorage.setItem("features", JSON.stringify(features));
	}, [features]);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(addProperty({ Features: checkedFeatures }));
	}, [checkedFeatures]);

	return (
		<div className={`${classes.card} ${classes.features}`}>
			<div className={classes.title}>
				<h3>Features</h3>
			</div>
			<Formik
				initialValues={{
					toggle: false,
					checked: [],
				}}
				onSubmit={async (values) => {
					await sleep(500);
					console.log(JSON.stringify(values, null, 2));
				}}>
				{({ values }) => (
					setCheckedFeatures(values.checked),
					(
						<Form>
							<div
								role="group"
								aria-labelledby="checkbox-group"
								className={classes.checkboxContainer}>
								{byDefaultFeatures.map((feature) => {
									return <Feature value={feature} />;
								})}
								{features.map((feature) => {
									return (
										<Feature value={feature}>
											<button
												className="btn featureDeleteBtn"
												onClick={handleDelete}>
												<IoCloseCircle />
											</button>
										</Feature>
									);
								})}
							</div>

							{/* <button type="submit">Submit</button> */}
						</Form>
					)
				)}
			</Formik>

			<div className={classes.addFeatureContainer}>
				{showFeature && (
					<div className="addFeature">
						<input
							type="text"
							placeholder="Add Feature"
							className="input"
							value={newFeature}
							onChange={handleChange}
						/>
						<button className="btn addFeatureBtn" onClick={handleNewFeature}>
							<IoAddCircleSharp /> Add
						</button>
					</div>
				)}
				{!showFeature && (
					<button
						className="btn addFeatureBtn"
						onClick={() => setShowFeature(true)}>
						<IoAddCircleSharp /> Add New Feature
					</button>
				)}
			</div>
		</div>
	);
};

export default FeatureCard;
