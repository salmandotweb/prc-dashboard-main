import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";

const InformationCard = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");

	return (
		<div className={`${classes.information} ${classes.card}`}>
			<div className={classes.title}>
				<h3>Information</h3>
			</div>
			<div className={classes.inputsContainer}>
				<input
					type="text"
					placeholder="Title"
					className="input"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<div className="richTextEditorContainer">
					<Editor
						editorState={description}
						toolbarClassName="toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="editorClassName"
						onEditorStateChange={setDescription}
					/>
				</div>
			</div>
			<div className={classes.detailsInputs}>
				<input
					type="text"
					placeholder="Street"
					className="input"
					value={street}
					onChange={(e) => setStreet(e.target.value)}
				/>
				<input
					type="text"
					placeholder="City"
					className="input"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Postal Code"
					className="input"
					value={postalCode}
					onChange={(e) => setPostalCode(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default InformationCard;
