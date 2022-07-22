import React from "react";
import classes from "../../Styles/Loading/Loading.module.css";

const Loading = () => {
	return (
		<div className={classes.container}>
			<span className={classes.circle}></span>
			<span className={classes.circle}></span>
			<span className={classes.circle}></span>
			<span className={classes.circle}></span>
		</div>
	);
};

export default Loading;
