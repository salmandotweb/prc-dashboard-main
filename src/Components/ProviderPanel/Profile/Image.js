import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import ImageUploading from "react-images-uploading";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";

const Image = () => {
	const [images, setImages] = useState([]);
	const maxNumber = 69;

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};
	return (
		<div className={`${classes.card} ${classes.imagesCard}`}>
			<div className={classes.title}>
				<h3>Image</h3>
			</div>
			<ImageUploading
				multiple
				value={images}
				onChange={onChange}
				maxNumber={maxNumber}
				dataURLKey="data_url">
				{({
					imageList,
					onImageUpload,
					onImageRemoveAll,
					onImageUpdate,
					onImageRemove,
					isDragging,
					dragProps,
				}) => (
					// write your building UI
					<div className="upload__image-wrapper">
						<div className={classes.imagesWrapper}>
							{imageList.map((image, index) => (
								<div key={index} className={classes.imageContainer}>
									<img
										src={image["data_url"]}
										alt=""
										width="100"
										className={classes.uploadedImage}
									/>
									<button
										onClick={() => onImageRemove(index)}
										className={`btn ${classes.removeBtn}`}>
										<FaTimes className={classes.deleteIcon} />
									</button>
								</div>
							))}
						</div>
						<div className={classes.uploadImage}>
							<div className={classes.chooseFile}>Choose File</div>
							<div className={classes.chooseImage}>Choose Property Images</div>
							<button
								onClick={onImageUpload}
								{...dragProps}
								className={`btn ${classes.uploadBtn}`}>
								Upload
							</button>
						</div>
					</div>
				)}
			</ImageUploading>
		</div>
	);
};

export default Image;
