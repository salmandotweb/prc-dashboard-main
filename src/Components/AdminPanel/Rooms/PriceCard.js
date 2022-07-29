import React, { useState } from "react";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";

const PriceCard = () => {
	const [price, setPrice] = useState("");
	const [prefix, setPrefix] = useState("");
	const [secondPrice, setSecondPrice] = useState("");
	const [secondPrefix, setSecondPrefix] = useState("");

	return (
		<div className={`${classes.card} ${classes.priceCard}`}>
			<div className={classes.title}>
				<h3>Price</h3>
			</div>
			<div className={classes.priceInputsContainer}>
				<div className={classes.priceInputs}>
					<input
						type="text"
						className="input"
						placeholder="Price"
						value={price}
						onChange={(e) => {
							setPrice(e.target.value);
						}}
					/>
					<input
						type="text"
						className="input"
						placeholder="Price Prefix"
						value={prefix}
						onChange={(e) => {
							setPrefix(e.target.value);
						}}
					/>
				</div>
				<div className={classes.priceInputs}>
					<input
						type="text"
						className="input"
						placeholder="Second Price"
						value={secondPrice}
						onChange={(e) => {
							setSecondPrice(e.target.value);
						}}
					/>
					<input
						type="text"
						className="input"
						placeholder="Price Prefix"
						value={secondPrefix}
						onChange={(e) => {
							setSecondPrefix(e.target.value);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default PriceCard;
