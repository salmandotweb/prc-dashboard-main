import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";
import { addImages } from "../../../features/addPropertySlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const ImagesCard = () => {
	const [selectedFiles, setSelectedFiles] = useState([]);

	const handleImageChange = (e) => {
		setSelectedFiles([...selectedFiles]);
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) =>
				URL.createObjectURL(file)
			);
			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
		}
	};

	function uploadToServer(e) {
		e.preventDefault();
		let files = e.target[0].files;
		let formData = new FormData();
		for (let i = 0; i < files.length; i++) {
			formData.append("file[]", files[i]);
		}
		// axios({
		// 	url: "https://upload.imagekit.io/api/v1/files/upload",
		// 	method: "POST",
		// 	data: formData,
		// }).then((res) => {
		// 	console.log(res);
		// });
	}
	const dispatch = useDispatch();

	useEffect(() => {
		if (selectedFiles.length > 0) {
			dispatch(
				addImages({
					images: selectedFiles,
				})
			);
		}
	}, [selectedFiles]);

	const renderPhotos = (source) => {
		return source.map((photo) => {
			return (
				<img
					src={photo}
					alt=""
					key={photo}
					width="100"
					className={classes.uploadedImage}
				/>
			);
		});
	};

	return (
		<div className={`${classes.card} ${classes.imagesCard}`}>
			<div className={classes.title}>
				<h3>Images</h3>
			</div>
			<form onSubmit={(e) => uploadToServer(e)} encType="multipart/form-data">
				<div className={classes.uploadImage}>
					<div className={classes.chooseFile}>Choose File</div>
					<div className={classes.chooseImage}>Choose Property Images</div>
					<input
						type="file"
						id="file"
						name="file[]"
						multiple
						accept="image/*"
						onChange={handleImageChange}
						className={`btn ${classes.uploadBtn}`}></input>
					<input type="submit" name=""></input>
				</div>
				<div className={classes.imagesWrapper}>
					<div className={classes.imageContainer}>
						<div className="result">{renderPhotos(selectedFiles)}</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ImagesCard;
