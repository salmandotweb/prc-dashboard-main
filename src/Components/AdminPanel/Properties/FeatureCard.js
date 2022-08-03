import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";
import { IoAddCircleSharp, IoCloseCircle } from "react-icons/io5";
import { addFeatures } from "../../../features/addPropertySlice";
import { useDispatch } from "react-redux";
import {
	useAddFeatureMutation,
	useAllFeaturesQuery,
} from "../../../services/userAuthApi";
import { getToken } from "../../../services/LocalStorageService";
import Loading from "../../Loading/Loading";

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
	const [checkedFeatures, setCheckedFeatures] = useState([]);
	const [featuresDB, setFeaturesDB] = useState([]);

	const checkIDs = featuresDB.map((feature) => {
		return feature.id;
	});

	const checkTitle = featuresDB.map((feature) => {
		return feature.title;
	});

	const IDs = checkedFeatures.map((feature) => {
		if (checkTitle.includes(feature)) {
			return checkIDs[checkTitle.indexOf(feature)];
		}
	});

	const token = getToken();
	const [addFeature] = useAddFeatureMutation();

	// fetch all features from db
	const { data, isLoading } = useAllFeaturesQuery(token);

	useEffect(() => {
		if (data) {
			setFeaturesDB(data.features);
		}
	}, [data]);

	const handleChange = (event) => {
		setNewFeature(event.target.value);
	};

	const addFeatureToDB = async () => {
		const res = await addFeature({ token: token, title: newFeature });
		console.log(res);
	};

	const handleAddFeature = () => {
		if (newFeature) {
			setFeatures([...features, newFeature]);
			addFeatureToDB(newFeature);
			setNewFeature("");
		} else {
			alert("Please enter a feature");
		}
	};

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(addFeatures({ Features: IDs }));
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
								{isLoading ? (
									<div className="loadingContainer">
										<Loading />
									</div>
								) : (
									featuresDB.map((feature) => {
										return <Feature value={feature.title} id={feature.id} />;
									})
								)}

								{features.map((feature) => {
									return <Feature value={feature}></Feature>;
								})}
							</div>
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
						<button className="btn addFeatureBtn" onClick={handleAddFeature}>
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
