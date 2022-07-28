import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from "../../../Styles/AdminPanel/AddAgent.module.css";

const Notes = () => {
	const [notes, setNotes] = useState("");
	return (
		<div className={`card ${classes.notesContainer}`}>
			<div className="title">
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

export default Notes;
