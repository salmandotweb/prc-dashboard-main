import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";
import { addInformation } from "../../../features/addPropertySlice";
import { useDispatch } from "react-redux";

const InformationCard = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			addInformation({
				title: name,
				description: description,
				street: street,
				city: city,
				postal_code: postalCode,
			})
		);
	}, [name, description, street, city, postalCode]);

	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);

	const onEditorStateChange = (editorState) => {
		setEditorState(editorState);

		const contentState = editorState.getCurrentContent().getPlainText();
		setDescription(contentState);
	};

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
						editorState={editorState}
						toolbarClassName="toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="editorClassName"
						onEditorStateChange={onEditorStateChange}
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
