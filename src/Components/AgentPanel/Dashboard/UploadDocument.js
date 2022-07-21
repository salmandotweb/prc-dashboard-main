import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import classes from "../../../Styles/AgentPanel/Dashboard.module.css";
import { RiAddLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";

const thumbsContainer = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	marginTop: 16,
};

const thumb = {
	display: "inline-flex",
	borderRadius: 2,
	border: "1px solid #eaeaea",
	marginBottom: 8,
	marginRight: 8,
	width: 100,
	height: 100,
	padding: 4,
	boxSizing: "border-box",
};

const thumbInner = {
	display: "flex",
	minWidth: 0,
	overflow: "hidden",
};

const img = {
	display: "block",
	width: "auto",
	height: "100%",
};

const UploadDocument = () => {
	const [files, setFiles] = useState([]);
	const { getRootProps, getInputProps } = useDropzone({
		accept: {
			"image/*": [],
			"text/html": [".html", ".htm"],
		},
		maxFiles: 1,
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	const thumbs = files.map((file) => (
		<div style={thumb} key={file.name}>
			<div style={thumbInner}>
				<img
					src={file.preview}
					style={img}
					// Revoke data uri after image is loaded
					onLoad={() => {
						URL.revokeObjectURL(file.preview);
					}}
				/>
			</div>
		</div>
	));

	useEffect(() => {
		// Make sure to revoke the data uris to avoid memory leaks, will run on unmount
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, []);

	function truncate(string, limit) {
		if (string.length > limit) {
			return string.substring(0, limit) + "...";
		} else {
			return string;
		}
	}

	return (
		<section className={classes.uploadDocuments}>
			<div {...getRootProps({ className: "dropzone" })}>
				<input {...getInputProps()} />
				{files.length === 0 ? (
					<RiAddLine className={classes.svg} />
				) : (
					<IoDocumentTextOutline className={classes.document} />
				)}
			</div>
			{files.length === 0 ? (
				<p className={classes.fade}>CMP Certificate</p>
			) : (
				<>
					{files.map((file) => (
						<p key={file.name}>{truncate(file.name.toUpperCase(), 15)}</p>
					))}
				</>
			)}
		</section>
	);
};

export default UploadDocument;
