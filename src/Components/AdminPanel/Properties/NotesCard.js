import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from "../../../Styles/AdminPanel/AddProperty.module.css";
import { addPrivateNotes } from "../../../features/addPropertySlice";
import { useDispatch } from "react-redux";

const NotesCard = () => {
	const [notes, setNotes] = useState("");

	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);

	const onEditorStateChange = (editorState) => {
		setEditorState(editorState);

		const contentState = editorState.getCurrentContent().getPlainText();
		setNotes(contentState);
	};

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			addPrivateNotes({
				Private_notes: notes,
			})
		);
	}, [notes]);

	return (
		<div className={`${classes.card} ${classes.notesCard}`}>
			<div className={classes.title}>
				<h3>Private Notes</h3>
			</div>
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
	);
};

export default NotesCard;
