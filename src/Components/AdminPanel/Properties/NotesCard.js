import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";

const NotesCard = () => {
	const [notes, setNotes] = useState("");
	console.log(notes);
	return (
		<div className={`${classes.card} ${classes.notesCard}`}>
			<div className={classes.title}>
				<h3>Private Notes</h3>
			</div>
			<div className="richTextEditorContainer">
				<Editor
					editorState={notes}
					toolbarClassName="toolbarClassName"
					wrapperClassName="wrapperClassName"
					editorClassName="editorClassName"
					onEditorStateChange={setNotes}
				/>
			</div>
		</div>
	);
};

export default NotesCard;
