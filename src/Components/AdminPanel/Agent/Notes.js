import React, { useState } from "react";
import classes from "../../../Styles/AdminPanel/AddAgent.module.css";

const Notes = () => {
	const [notes, setNotes] = useState("");
	return (
		<div className={`card ${classes.notesContainer}`}>
			<div className="title">
				<h3>Private Notes</h3>
			</div>
			<textarea
				name=""
				id=""
				cols="30"
				rows="8"
				placeholder="......."
				value={notes}
				onChange={(e) => setNotes(e.target.value)}></textarea>
		</div>
	);
};

export default Notes;
