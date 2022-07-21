import React, { useState } from "react";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";

const NotesCard = () => {
	const [notes, setNotes] = useState("");
	console.log(notes);
	return (
		<div className={`${classes.card} ${classes.notesCard}`}>
			<div className={classes.title}>
				<h3>Private Notes</h3>
			</div>
			<div className={classes.notesContainer}>
				<textarea
					className={`input ${classes.notes}`}
					name=""
					id=""
					cols="30"
					rows="10"
					placeholder="Anything you want to tell us..."
					value={notes}
					onChange={(e) => setNotes(e.target.value)}></textarea>
			</div>
		</div>
	);
};

export default NotesCard;
