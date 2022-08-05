import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";
import { addImages } from "../../../features/addPropertySlice";
import { useDispatch } from "react-redux";

const ImagesCard = () => {
	const [images, setImages] = useState([]);

	const dispatch = useDispatch();

	const handleChange = (e) => {
		setImages({
			image: e.target.files[0],
		});
	};
	const submitForm = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("image", images.image);
	};
	return (
		<div className={`${classes.card} ${classes.imagesCard}`}>
			<div className={classes.title}>
				<h3>Images</h3>
			</div>
			<form onSubmit={submitForm}>
				<div className={classes.uploadImage}>
					<div className={classes.chooseFile}>Choose File</div>
					<div className={classes.chooseImage}>Choose Property Images</div>
					<input
						type="file"
						accept="image/*"
						onChange={handleChange}
						className={`btn ${classes.uploadBtn}`}></input>
					<input type="submit" name=""></input>
				</div>
				<div className={classes.imagesWrapper}>
					<div className={classes.imageContainer}>
						<div className="result"></div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ImagesCard;
