import React from "react";
import { useId } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import classes from "../../../Styles/AgentPanel/Profile.module.css";

const DocumentsCard = () => {
	const id = useId();
	const documents = [
		"Certification 1",
		"Certification 2",
		"Certification 3",
		"Certification 4",
		"Certification 5",
		"Certification 6",
	];
	return (
		<div className={`card ${classes.documentCard}`}>
			<div className="title">
				<h3>Documents</h3>
			</div>
			<div className={classes.documents}>
				{documents.map((document) => (
					<div className={classes.document} key={id}>
						<IoDocumentTextOutline />
						{document}
					</div>
				))}
			</div>
		</div>
	);
};

export default DocumentsCard;
