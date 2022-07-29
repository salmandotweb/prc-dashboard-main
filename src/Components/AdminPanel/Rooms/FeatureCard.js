import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const FeatureCard = () => {
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
					<Form>
						<div
							role="group"
							aria-labelledby="checkbox-group"
							className={classes.checkboxContainer}>
							<label className={classes.checkbox}>
								<Field type="checkbox" name="checked" value="Additional Side" />
								Additional Side
							</label>
							<label>
								<Field
									type="checkbox"
									name="checked"
									value="Air Conditioning"
								/>
								Air Conditioning
							</label>
							<label>
								<Field type="checkbox" name="checked" value="Barbeque" />
								Barbeque
							</label>
							<label className={classes.checkbox}>
								<Field type="checkbox" name="checked" value="Dryer" />
								Dryer
							</label>
							<label>
								<Field type="checkbox" name="checked" value="Furnished" />
								Furnished
							</label>
							<label>
								<Field type="checkbox" name="checked" value="Great location" />
								Great location
							</label>
							<label className={classes.checkbox}>
								<Field type="checkbox" name="checked" value="Gym" />
								Gym
							</label>
						</div>

						{/* <button type="submit">Submit</button> */}
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FeatureCard;
